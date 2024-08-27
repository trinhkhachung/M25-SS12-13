import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ErrorHandlingProps {
  posts: Post[] | null;
  error: string | null;
}

export default async function ErrorHandling() {
  let posts: Post[] | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    posts = await res.json();
  } catch (err: any) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h3>Xử lý Lỗi với SSR</h3>
        <p>Đã xảy ra lỗi: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts &&
          posts.map((post: Post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
