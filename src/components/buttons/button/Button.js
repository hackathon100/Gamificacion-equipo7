import { StyledButtom } from './style'

const Button = ({onClick, text, dataToggle, dataTarget, icon }) => {
    return (
        <StyledButtom onClick={onClick} className="btn btn-danger" data-toggle={dataToggle} data-target={dataTarget}>
            <span>
                {icon && icon}
            </span>
            <span>
                {text && text}
            </span>
        </StyledButtom>
    )
}

export default Button;
