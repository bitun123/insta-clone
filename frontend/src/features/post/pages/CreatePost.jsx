// Pages Layer — CreatePost
// Form to create a new post wired to handleCreatePost from usePost
// Uses framer-motion for smooth image preview entry

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { usePost } from "../hooks/usePost";

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
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{ padding: "40px 24px", width: "100%", display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "100%", maxWidth: 470 }}>
        <h2 style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#f5f5f5",
          textAlign: "center",
          borderBottom: "1px solid #262626",
          paddingBottom: 14,
          marginBottom: 24,
        }}>
          Create new post
        </h2>

        <form onSubmit={onSubmit}>
          {/* Image Upload */}
          <label style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #404040",
            borderRadius: 12,
            padding: 32,
            cursor: "pointer",
            marginBottom: 20,
            background: preview ? "transparent" : "#111",
            minHeight: 280,
            overflow: "hidden",
            position: "relative",
          }}>
            <AnimatePresence mode="wait">
              {preview ? (
                <motion.img
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  src={preview}
                  alt="preview"
                  style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
                />
              ) : (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: "center", color: "#737373" }}
                >
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🖼️</div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#d4d4d4" }}>
                    Click to select a photo
                  </p>
                  <p style={{ fontSize: 12, marginTop: 4 }}>JPG, PNG, GIF</p>
                </motion.div>
              )}
            </AnimatePresence>
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              style={{ display: "none" }}
            />
          </label>

          {/* Caption */}
          <textarea
            placeholder="Write a caption…"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              background: "#111",
              border: "1px solid #262626",
              borderRadius: 8,
              color: "#f5f5f5",
              fontSize: 14,
              padding: "10px 14px",
              resize: "none",
              outline: "none",
              marginBottom: 16,
              fontFamily: "inherit",
              transition: "border-color 0.2s ease"
            }}
          />

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={!image || loading}
            style={{
              width: "100%",
              background: image && !loading ? "#0095f6" : "#0095f620",
              color: image && !loading ? "#fff" : "#0095f680",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              padding: "10px 0",
              cursor: image && !loading ? "pointer" : "not-allowed",
              transition: "background 0.2s ease, opacity 0.2s ease",
            }}
          >
            {loading ? "Sharing…" : "Share"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default CreatePost;
