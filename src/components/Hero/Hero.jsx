import { Link } from "react-router-dom";
import { Button, MainHeading } from "../../globalStyles";
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from "./HeroStyles";



const Hero = () => {
    return ( 
        <HeroSection>
            <HeroVideo src="./assets/hero.mp4" />
            <container>
                <MainHeading>Your data is secure with us</MainHeading>
                <HeroText>
                    We provide the best security systems for clients all over the world
                </HeroText>
                <ButtonWrapper>
                    <Link to="signup">
                        <Button>Get Started</Button>
                    </Link>
                    <HeroButton>Find More</HeroButton>
                </ButtonWrapper>
            </container>
        </HeroSection>
     );
}
 
export default Hero;
