import styled from 'styled-components';

export const StyledButtom = styled.button`
    margin-top: 20px;
    padding: ${({height, width})=> `${height}px ${width}px` };
    transition: 200ms ease;
     ${({bgImage})=> `background-image:url(${bgImage}); background-size: 150px 150px; background-position: center; background-repeat: no-repeat;` };
    & > span:first-child{
        margin-right: 5px;
    }
    &:hover{
        background-size: 170px 170px;
        padding: ${({height, width})=> `${height+30}px ${width+30}px` };
    }
`