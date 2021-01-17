import { useHistory } from 'react-router-dom';
import { StyledSpan } from './style';

const HomeModalButton = ({ text }) => {

    const history = useHistory()

    return (
        <StyledSpan
            data-dismiss="modal"
            onClick={() => history.push(`/v1/createroom/${text}`)}
            className="btn btn-primary rounded-circle px-5 py-4"
        >
            {text}
        </StyledSpan>
    )
}

export default HomeModalButton;
