import { Link, useLoaderData } from "react-router-dom"


export default function PostDetails() {
    const singlepPost = useLoaderData();
    const { id, body, title, userId } = singlepPost;
    return (
        <>
            <div className="border-2 border-rose-200 p-4 m-4  rounded-xl w-[400px] md:w-[500px] mx-auto">

                <div className="flex justify-between items-center font-bold text-sm">
                    <p>userId : {userId}</p>
                    <p>post id : {id}</p>
                </div>
                <p className="text-center font-bold ">{title}</p>
                <p className="text-sm text-gray-400 text-justify">{body}</p>
                <Link to={'/posts'}>
                    <button className="btn w-full mx-auto btn-outline bg-orange-200 my-5">Go back </button>
                </Link>
            </div>
        </>
    )
}
