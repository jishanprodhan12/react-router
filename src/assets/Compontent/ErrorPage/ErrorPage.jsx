import { useNavigate, useRouteError } from "react-router-dom"


export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const {status , statusText  } = error ;
    console.log(error.error.message);
    const handleGoBack =()=>{
        navigate(-1);
    }
  return (
    <>
      <h3 className="text-4xl text-center font-bold mt-10 ">Oopss!!!</h3>
      <div >
            {
                (error.error.message || statusText ) && 
                <p className="text-3xl  text-center my-10">
                    <span className="text-7xl text-rose-600 font-extrabold">{status}</span> <br /> <br />
                    {statusText} <br /> <br />
                    {error.error.message}
                </p>
               
            }
         
            <p className="w-fit  mx-auto">
            <button onClick={handleGoBack} className="btn btn-error  btn-outline   btn-lg ">Go back</button>
            </p>
         
      </div>
    </>
  )
}
