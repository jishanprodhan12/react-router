import { useLoaderData, useNavigate } from "react-router-dom"

export default function ShowDetails() {
    const singleUser = useLoaderData();
    console.log(singleUser);
    const { name, id, username, address, email, phone, website, company } = singleUser;
    const navigate = useNavigate();
    const handleGoBack = () => {
            navigate(-1);
    }
    return (
        <>
            <div className="text-3xl text-rose-300 my-5 text-center">Show Details </div>
            <div className="border-2 border-red-300 rounded-2xl m-4 p-4 w-[500px] mx-auto">
                <p className="text-xl font-bold">Name : {name} </p>
                <p>Username: {username} </p>
                <p>UserID : {id} </p>
                <p>address : {address.city} </p>
                <p>email : {email} </p>
                <p>phone : {phone} </p>
                <p>website : {website} </p>
                <p>Company : {company.name}</p>
                <button onClick={handleGoBack} className="btn w-full mx-auto btn-outline bg-orange-200 my-5">Go back</button>
            </div>
        </>

    )
}
