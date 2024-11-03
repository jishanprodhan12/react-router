import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
    const { id, title, body } = post;
    const navigatezzz = useNavigate();
    const handleShowDetails = () => {
        navigatezzz(`/post/${id}`);
    }


    return (
        <>
            <div className="border-2 border-red-300 rounded-xl p-4 m-4 flex flex-col gap-3">
                <p className="font-bold text-center">{title}</p>
                <p className="text-sm text-gray-500 flex-grow text-justify"> {body}</p>
                <button className="btn w-full mx-auto btn-outline mt-4"
                    onClick={handleShowDetails}>Show Details</button>
            </div>
        </>
    )
}
