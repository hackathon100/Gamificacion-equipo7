import { StyledButtom } from './style'

const Button = ({ onClick, text, dataToggle, dataTarget, icon, img, className = "btn btn-danger", height = 10, width = 30, bgImage }) => {
    return (
        <StyledButtom
            onClick={onClick}
            className={className}
            data-toggle={dataToggle}
            data-target={dataTarget} 
            {...{height, width, bgImage}}
        >
            <span>
                {icon && icon}
            </span>
            <span>
                {text && text}
            </span>
            <span>
                {img && img}
            </span>
        </StyledButtom>
    )
}

export default Button;
