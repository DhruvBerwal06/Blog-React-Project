import React from "react";
import { Link } from "react-router-dom";

function Logo({ width = "100px" }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <img
        src={
          "https://thumbs.dreamstime.com/b/creative-simple-dragons-silhouettes-logo-stylized-vector-illustrations-simple-dragons-silhouettes-logo-130475058.jpg"
        }
        alt="Logo"
        className="object-contain rounded-full"
        style={{ width, height: "auto" }}
      />
      <span className="whitespace-nowrap text-3xl font-black tracking-tight text-white sm:text-4xl">
        BlogIt.
      </span>
    </Link>
  );
}

export default Logo;
