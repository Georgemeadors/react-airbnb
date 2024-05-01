import "./Hero.css";
import photoGrid from "./images/photo-grid.png"

export default function Hero() {
    return (
    <div>
        <div className="hero-container">
            <img src={photoGrid} alt="photo" className="hero-image"/>
            <h1 className="hero-text">Online Experiences</h1>
            <p className="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
        <div className="card">
           
        </div>
        
    </div>
    );
}