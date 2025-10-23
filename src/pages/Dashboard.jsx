import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
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

export default function Dashboard() {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
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

  const handleDelete = async (e, id) => {
    e.preventDefault(); // stop navigation when deleting
    if (!window.confirm("Are you sure you want to delete this pitch?")) return;

    try {
      await deleteDoc(doc(db, "pitches", id));
      setPitches((prev) => prev.filter((pitch) => pitch.id !== id));
      toast.success("Pitch deleted successfully ✅");
    } catch (error) {
      console.error("Error deleting pitch:", error);
      toast.error("Failed to delete pitch ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#111827] to-[#020617] text-white px-4 py-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Your Saved Pitches
        </h1>

        {loading ? (
          <p className="text-gray-400 text-center">Loading pitches...</p>
        ) : pitches.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            You haven’t generated any pitches yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pitches.map((pitch) => (
              <Link
                key={pitch.id}
                to={`/pitch/${pitch.id}`}
                className="block bg-[#1e293b]/80 border border-blue-900/40 rounded-2xl p-5 shadow-lg hover:shadow-blue-900/40 transition-transform hover:-translate-y-1 hover:border-blue-700"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold text-blue-400 truncate">
                    {pitch.name || "Untitled Pitch"}
                  </h2>
                  <button
                    onClick={(e) => handleDelete(e, pitch.id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
                    title="Delete Pitch"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  Created at:{" "}
                  {pitch.createdAt?.seconds
                    ? new Date(pitch.createdAt.seconds * 1000).toLocaleString()
                    : "N/A"}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
