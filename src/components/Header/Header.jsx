import React from "react";
import { Link } from "react-router-dom";
import { Logo, Container, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-900/95 text-white shadow-sm backdrop-blur">
      <Container>
        <nav className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center">
          <div className="flex justify-center sm:mr-4 sm:justify-start">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:ml-auto sm:justify-end">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="rounded-full px-3 py-2 text-xs font-medium text-slate-100 transition-all duration-200 hover:bg-white/10 hover:text-white sm:text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
