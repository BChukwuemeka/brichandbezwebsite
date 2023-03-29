import { FaBlackTie } from "react-icons/fa";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";

const AboutPage = () => {
    return ( 
        <>
        <Carousel />
        <Features color= {FaBlackTie}/>
        </>
     );
}
 
export default AboutPage;