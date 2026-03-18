import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { usePost } from "../hooks/usePost";
import { AnimatePresence } from "framer-motion";

function CreatePost() {
  const { handleCreatePost, loading } = usePost();
  const navigate = useNavigate();

  const [image, setImage]     = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    await handleCreatePost({ image, caption });
    navigate("/feed");
  };

  return (
    <div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="py-10 px-6 w-full flex justify-center"
    >
      <div className="w-full max-w-[470px]">
        <h2 className="text-base font-bold text-gray-100 text-center border-b border-gray-700 pb-3.5 mb-6">
          Create new post
        </h2>

        <form onSubmit={onSubmit}>
          {/* Image Upload */}
          <label className={`flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-3xl p-8 cursor-pointer mb-5 min-h-72 overflow-hidden relative transition-all ${preview ? "bg-transparent" : "bg-gray-950"}`}>
            <AnimatePresence mode="wait">
              {preview ? (
                <img
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  src={preview}
                  alt="preview"
                  className="w-full rounded-2xl object-cover"
                />
              ) : (
                <div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-600"
                >
                  <div className="text-5xl mb-3">🖼️</div>
                  <p className="text-sm font-semibold text-gray-300">
                    Click to select a photo
                  </p>
                  <p className="text-xs mt-1">JPG, PNG, GIF</p>
                </div>
              )}
            </AnimatePresence>
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              className="hidden"
            />
          </label>

          {/* Caption */}
          <textarea
            placeholder="Write a caption…"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
            className="w-full bg-gray-950 border border-gray-700 rounded-2xl text-gray-100 text-sm p-3.5 resize-none outline-none mb-4 font-inherit focus:border-gray-600 transition-colors"
          />

          {/* Submit */}
          <button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={!image || loading}
            className={`w-full px-0 py-2.5 border-none rounded-2xl text-sm font-bold transition-all ${
              image && !loading
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                : "bg-blue-900 bg-opacity-15 text-blue-500 text-opacity-60 cursor-not-allowed"
            }`}
          >
            {loading ? "Sharing…" : "Share"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
