import Phone from "./Phone";
import Contact from "./Contact";
import Loader from "./Loading";
const Footer = () => {
    return (
        <div  className="h-fit w-screen p-2 flex flex-row justify-evenly items-center">
            <Contact/>
            <Loader/>
            <Phone/>

            <img src = "eiu/eiu.png" alt="eiu logo" className=" w-1/4 object-contain"/>
        </div>
    )
}
export default Footer;