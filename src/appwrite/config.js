import conf from "../conf/conf.js";
import {
  Client,
  Databases,
  ID,
  Permission,
  Query,
  Role,
  Storage,
} from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwrite.appwriteUrl)
      .setProject(conf.appwrite.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, userId, slug, featuredImage, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwrite.appwriteDatabaseId,
        conf.appwrite.appwriteCollectionId,
        slug,
        {
          title,
          content,
          userId,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, userId, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwrite.appwriteDatabaseId,
        conf.appwrite.appwriteCollectionId,
        slug,
        {
          title,
          content,
          userId,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwrite.appwriteDatabaseId,
        conf.appwrite.appwriteCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwrite.appwriteDatabaseId,
        conf.appwrite.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwrite.appwriteDatabaseId,
        conf.appwrite.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // File Upload Service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwrite.appwriteBucketId,
        ID.unique(),
        file,
        [Permission.read(Role.any())],
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwrite.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    if (!fileId) return "";

    try {
      return this.bucket.getFileView(conf.appwrite.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error);
      return "";
    }
  }
}

const service = new Service();
export default service;
