import styled from 'styled-components';

export const StyledButton = styled.button`
        background-color: white;
        display: flex;
        align-items: center;
        padding: 10px 30px;
        border: 0;
        border-radius: 5px;
        box-shadow: 2px 2px 8px grey;
        outline: none;
        transition: 500ms ease;
        & > svg {
            width: 20px;
            margin-right: 10px;
            transition: 200ms ease;
        }
        &:active {
            box-shadow: inset 2px 2px 8px grey;
            outline: none;
        }
        &:hover{
                padding:10px 50px;
                background-color: green;
                color: white;
        }
    `