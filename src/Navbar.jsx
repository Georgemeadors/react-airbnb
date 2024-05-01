import airbnb from "./images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnb} alt="image" className="navbar-image"/>

        </nav>

    );
}
