async function fetchPostDetails(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  const idPost = params.id;
  const postDetails = await fetchPostDetails(idPost);

  return (
    <div>
      <h1>Chi tiết Bài viết</h1>
      <h2>{postDetails.title}</h2>
      <p>{postDetails.body}</p>
    </div>
  );
}
