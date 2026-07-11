import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const showWelcomeSection = !authStatus;

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-2 sm:py-4">
        <Container>
          {showWelcomeSection && (
            <div className="mb-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Welcome to BlogIt.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Stories, ideas, and fresh perspectives.
                </h1>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                  Browse the latest posts and share your voice.
                </p>
              </div>
            </div>
          )}
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Link
              to="/login"
              className="text-3xl font-bold tracking-tight text-slate-900 transition-all duration-200 hover:text-gray-600 sm:text-4xl"
            >
              Login to read posts
            </Link>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-2 sm:py-4">
      <Container>
        {showWelcomeSection && (
          <div className="mb-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Welcome to BlogIt.
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Stories, ideas, and fresh perspectives.
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Browse the latest posts and share your voice.
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-wrap -m-2">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
