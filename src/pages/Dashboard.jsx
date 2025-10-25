import React, { useEffect, useState } from "react";
import { Trash2, FileText, Plus, Search, Filter, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { db, auth } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserPitches(currentUser.uid);
      } else {
        setUser(null);
        setPitches([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserPitches = async (userId) => {
    setLoading(true);
    try {
      const q = query(collection(db, "pitches"), where("userId", "==", userId));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPitches(data);
    } catch (error) {
      console.error("Error fetching pitches:", error);
      toast.error("Failed to load your pitches.");
    }
    setLoading(false);
  };

  // 🗑️ Delete Pitch with hot toast confirmation
  const handleDelete = async (e, id) => {
    e.preventDefault();

    toast(
      (t) => (
        <div className="flex flex-col items-center text-center">
          <p className="font-semibold text-white mb-3">
            Are you sure you want to delete this pitch?
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  await deleteDoc(doc(db, "pitches", id));
                  setPitches((prev) => prev.filter((pitch) => pitch.id !== id));
                  toast.success("Pitch deleted successfully ✅");
                } catch (error) {
                  console.error("Error deleting pitch:", error);
                  toast.error("Failed to delete pitch ❌");
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#0f172a",
          color: "#fff",
          border: "1px solid #334155",
        },
        duration: 5000,
      }
    );
  };

  // 🔍 Search filter
  const filteredPitches = pitches.filter((p) =>
    p.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Dashboard
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Manage your saved startup pitches
            </p>
          </div>
          <Link
            to="/generate"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <Plus size={18} />{" "}
            <span className="hidden sm:inline">New Pitch</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
          data-aos="fade-down"
        >
          <div className="relative w-full sm:w-72">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search your pitches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
            />
          </div>
          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition">
            <Filter size={18} />
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            Loading your pitches...
          </div>
        ) : filteredPitches.length === 0 ? (
          <div className="text-center py-20" data-aos="zoom-in">
            <Sparkles className="mx-auto text-blue-400 mb-4" size={40} />
            <p className="text-gray-400 text-lg mb-6">
              No saved pitches found — start creating one today!
            </p>
            <Link
              to="/generate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Plus size={18} /> New Pitch
            </Link>
          </div>
        ) : (
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
          >
            {filteredPitches.map((pitch) => (
              <Link
                key={pitch.id}
                to={`/pitch/${pitch.id}`}
                data-aos="fade-up"
                className="block bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-1 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                      <FileText size={18} />
                    </div>
                    <h2 className="text-lg font-semibold text-blue-300 truncate max-w-[150px] sm:max-w-[200px]">
                      {pitch.name || "Untitled Pitch"}
                    </h2>
                  </div>
                  <button
                    onClick={(e) => handleDelete(e, pitch.id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
                    title="Delete Pitch"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <p className="text-sm text-gray-400 line-clamp-3 mb-3">
                  {pitch.tagline || pitch.elevator_pitch || "No description"}
                </p>

                <div className="text-xs text-gray-500">
                  Created:{" "}
                  {pitch.createdAt?.seconds
                    ? new Date(pitch.createdAt.seconds * 1000).toLocaleString()
                    : "N/A"}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
