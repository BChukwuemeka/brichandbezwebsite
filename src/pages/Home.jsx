
// Hero Feature Content Carousel

import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import {heroOne, heroThree, heroTwo} from '../data/HeroData'

const Home = () => {
    return ( 
        <>
        <Hero/>
        <Features />
        <Content {...heroOne} />
        <Content {...heroTwo} />
        <Content {...heroThree} />
        <Carousel />
        </>
     );
}
 
export default Home;