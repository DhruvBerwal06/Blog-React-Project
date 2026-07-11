import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_25%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-800">
      <Header />
      <main className="flex-1 bg-transparent px-0 py-6 sm:px-2 sm:py-8 lg:px-0 lg:py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
