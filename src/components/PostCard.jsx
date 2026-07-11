import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block h-full">
      <div className="group h-full overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
        <div className="mb-4 overflow-hidden rounded-[1.2rem]">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-3 px-1 pb-1">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
            Featured
          </span>
          <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
            {title}
          </h2>
          <p className="text-sm text-slate-500">
            Discover this article and explore the full story.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
