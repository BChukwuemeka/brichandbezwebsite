import { FaBlackTie } from "react-icons/fa";
import AboutTop from "../components/AboutTop/AboutTop";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";

const AboutPage = () => {
    return ( 
        <>
        <AboutTop />
        <Carousel />
        <Features color= {FaBlackTie}/>
        </>
     );
}
 
export default AboutPage;