

export default function User({ user }) {
    const { name, id, username , address, email, phone, website, company } = user;
    return (
        <>
            <div className="border-2 border-red-300 rounded-2xl m-4 p-4 ">
                <p>Name : {name} </p>
                <p>Username: {username} </p>
                <p>UserID : {id} </p>
                <p>address : {address.city} </p>
                <p>email : {email} </p>
                <p>phone : {phone} </p>
                <p>website : {website} </p>
                <p>Company : {company.name}</p>
            </div>
        </>
    )
}
