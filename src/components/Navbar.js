import Button from "./buttons/button/Button";
import { Link } from "react-router-dom";

const Navbar = ({ logout }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">Navbar</Link>
            <Button
                className="ml-auto"
                text="Logout"
                onClick={logout}
            />
        </nav>
    )
}

export default Navbar;
