import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post";


export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h1 className="text-5xl text-center font-bold my-5"> Posts {posts.length}</h1>
      <div className="grid md:grid-cols-3">
        {
            posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </>
  )
}
