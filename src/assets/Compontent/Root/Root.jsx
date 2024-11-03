import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Spinar from "../Sipnar/Spinar";


export default function Root() {
  const navigation = useNavigation();
  return (
   <>
    <Navbar/>
    {
      navigation.state === 'loading' ? <Spinar></Spinar> :  <Outlet></Outlet>
    }
   
    <Footer/>
   </>
  )
}
