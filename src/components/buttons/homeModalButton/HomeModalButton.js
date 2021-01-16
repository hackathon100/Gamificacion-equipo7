import { useHistory } from 'react-router-dom';


const HomeModalButton = ({ text }) => {

    const history = useHistory()

    return (
        <span
            data-dismiss="modal"
            onClick={() => history.push(`/v1/createroom/${text}`)}
            className="btn btn-primary rounded-circle px-5 py-4"
        >
            {text}
        </span>
    )
}

export default HomeModalButton;
