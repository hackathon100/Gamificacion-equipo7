import Button from "./buttons/button/Button";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/appContext";

const Navbar = ({ logout }) => {

    const history = useHistory();
    const { actions } = useContext(Context);
    
    const signout = () =>{
        logout()
        actions.logout(history)
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">Navbar</Link>
            <Button
                className="ml-auto"
                text="Logout"
                onClick={signout}
            />
        </nav>
    )
}

export default Navbar;
