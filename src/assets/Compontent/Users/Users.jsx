import { useLoaderData } from "react-router-dom"
import User from "../User/User";


export default function Users() {
  const users = useLoaderData();
  return (
    <>
      <h3 className="text-5xl text-center font-bold my-5">our users {users.length}</h3>
      <div className="grid md:grid-cols-3">
        {
          users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </>
  )
}
