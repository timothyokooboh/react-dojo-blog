import { StyledAbout } from "../components/styles/About.styled"
const About = () => {
    return ( 
        <StyledAbout>
            <h2>About us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quibusdam porro! Tempora magni beatae ad facere, quae corrupti perferendis dolorem, voluptatibus laboriosam soluta autem blanditiis voluptate at, atque eaque odit.</p>
            <div className="about-body">
                <h2>our policy</h2>
                <p>We are the very <span>best at what we do</span></p>
            </div>
        </StyledAbout>
     );
}
 
export default About;