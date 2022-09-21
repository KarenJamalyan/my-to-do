import styled from "styled-components";


export const Title = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const AddInput = styled.input`
    margin: 5px;
    border: 2px solid #008CBA;
    height: 16px;
`

export const AddButton = styled.button`
    margin: 5px;
    padding: 2px 9px;
    border-radius: 10%;
    cursor:pointer;
    background-color: #FFFFFF;
    color: black;
    border: 2px solid #008CBA;
    &:hover{
        background-color: #008CBA;
        color: white;
    }
`
