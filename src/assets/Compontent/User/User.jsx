import { Link } from "react-router-dom";


export default function User({ user }) {
    const { name, id, email,  website } = user;
    return (
        <>
            <div className="border-2 border-red-300 rounded-2xl m-4 p-4 ">
                <p className="text-xl font-bold">Name : {name} </p>
                <p>email : {email} </p>
                <p>website : {website} </p>
                <Link to={`/user/${id}`}> 
                    <button className="btn w-full btn-outline mx-auto mt-4">Show Details</button>
                </Link>

            </div>
        </>
    )
}
