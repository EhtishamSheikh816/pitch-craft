import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreatePitch from "./pages/CreatePitch";
import PitchResult from "./pages/PitchResult";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PitchDetails from "./pages/PitchDetails";
import Reviews from "./pages/Reviews";
import Error from "./pages/Error";
import LoaderPage from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (2.5s)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/reviews", element: <Reviews /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/generate",
          element: (
            <ProtectedRoute>
              <CreatePitch />
            </ProtectedRoute>
          ),
        },
        {
          path: "/pitch-result",
          element: (
            <ProtectedRoute>
              <PitchResult />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        { path: "/pitch/:id", element: <PitchDetails /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <RouterProvider router={router} />
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        </>
      )}
    </>
  );
}

export default App;
