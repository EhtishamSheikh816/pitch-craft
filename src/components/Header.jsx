import React, { useEffect, useState } from "react";
import { Sparkles, Menu, X, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged, signOut } from "../config/firebase";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Track Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // ✅ Common navigation items
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-gray-900/50 shadow-lg backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="text-blue-400 animate-pulse" size={25} />
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pitch Craft
          </span>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-300">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Only show these if logged in */}
          {user && (
            <>
              <li>
                <NavLink
                  to="/generate"
                  className={({ isActive }) =>
                    `hover:text-blue-400 transition ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                        : ""
                    }`
                  }
                >
                  Add Pitch
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `hover:text-blue-400 transition ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                        : ""
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Right: Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-300 font-medium">
                Hi,{" "}
                <span className="text-blue-400">
                  {user.displayName || user.email.split("@")[0]}
                </span>{" "}
                👋
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-md text-white transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-md text-blue-400 transition"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md text-white transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <span className="text-gray-300 text-sm font-medium">
              Hi,{" "}
              <span className="text-blue-400">
                {user.displayName || user.email.split("@")[0]}
              </span>
            </span>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute w-full flex flex-col items-center gap-6 text-lg font-medium bg-gray-900/95 border-t border-gray-700 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {user && (
          <>
            <NavLink
              to="/generate"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Add Pitch
            </NavLink>
            <NavLink
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Dashboard
            </NavLink>
          </>
        )}

        <div className="flex flex-col gap-4 items-center mt-4">
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-white transition flex items-center gap-1"
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="border border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-md text-blue-400 transition"
              >
                Signup
              </Link>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </ul>
    </header>
  );
};

export default Header;
