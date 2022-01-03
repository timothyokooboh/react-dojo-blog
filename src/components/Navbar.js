import { Link } from "react-router-dom";
import { Nav } from "./styles/Navbar.styled";
import { useState } from "react";

const Navbar = () => {
    const [color, setColor] = useState("#f1356d")
    return ( 
        <div>
            <Nav color={color}>
                <h1 className="timmy">The Dojo Blog</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                    <Link to="/about">About</Link>
                </div>
            </Nav>
            <input 
                type="color" 
                value={ color } 
                onChange={(e) => setColor(e.target.value)}
            />
        </div> 
    );
}
 
export default Navbar;

