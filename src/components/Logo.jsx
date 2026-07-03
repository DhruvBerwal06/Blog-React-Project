import React from "react";
import { Link } from "react-router-dom";

function Logo({ width = "100px" }) {
  return (
    <Link to="/" className="inline-block" style={{ width }}>
      <img
        src={
          "https://thumbs.dreamstime.com/b/creative-simple-dragons-silhouettes-logo-stylized-vector-illustrations-simple-dragons-silhouettes-logo-130475058.jpg"
        }
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
