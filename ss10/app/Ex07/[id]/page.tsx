import React from "react";

interface PropType {
  params: {
    id: string;
  };
}

export default async function page({ params }: PropType) {
  const { id } = params;
  let post = null;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
  } catch (error: any) {
    return (
      <div>
        <h1>Chi tiết Bài viết với Static Params</h1>
        <p>Đã xảy ra lỗi: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[24px] font-[700] mb-[20px]">
        Tiêu đề: {post.title}
      </h1>
      <p>Nội dung: {post.body}</p>
    </div>
  );
}
