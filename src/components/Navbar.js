import Button from "./buttons/button/Button";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/appContext";
import GoogleButton from "./buttons/googleButton/GoogleButton";

const Navbar = ({ logout }) => {

    const history = useHistory();
    const { actions } = useContext(Context);

    const signout = () => {
        logout()
        actions.logout(history)
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">
                <img src="https://drive.google.com/uc?id=13ADzLZRx23Xwp9oXl9AxuthFYaqhAny3" alt="Not Found" width="60" />
            </Link>
            <GoogleButton
                text="Logout"
                onClick={signout}
            />
        </nav>
    )
}

export default Navbar;
