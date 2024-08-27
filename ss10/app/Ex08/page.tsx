"use client";
import React, { useState, useEffect } from "react";

export default function page() {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    const results = posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  return (
    <div className="ml-[250px]">
      <h1>Tìm Kiếm Bài viết (CSR)</h1>
      <input
        className="w-[400px] h-[26px] p-2 border border-black"
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post: any) => <li key={post.id}>{post.title}</li>)
        ) : (
          <li>Không có bài viết nào khớp với từ khóa tìm kiếm.</li>
        )}
      </ul>
    </div>
  );
}
