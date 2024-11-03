import { Link } from "react-router-dom";

export default function Post({ post }) {
    console.log(post);
    const { id, title, body } = post
    return (
        <>
            <div className="border-2 border-red-300 rounded-xl p-4 m-4 flex flex-col gap-3">
                <p className="font-bold text-center">{title}</p>
                <p className="text-sm text-gray-500 flex-grow text-justify"> {body}</p>
                <Link to={`/post/${id}`}>
                    <button className="btn w-full mx-auto btn-outline mt-4">Show Details</button>
                </Link>
            </div>
        </>
    )
}
