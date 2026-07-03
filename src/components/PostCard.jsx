import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block h-full">
      <div className="w-full h-full bg-gray-200 rounded-xl p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
        <div className="mb-4 flex justify-center">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-48 rounded-xl object-cover"
          />
        </div>
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
