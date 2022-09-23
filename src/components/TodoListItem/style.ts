import styled from "styled-components";


export const TopDiv =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
`

export const Title = styled.h4`
    width: 60%
`

export const  Percent = styled.span`    
    color: #008CBA;
    padding-right:5px
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    span{
        padding: 3px;
        cursor: pointer;
    }
`

export const Line = styled.div`
    border: 1px solid #008CBA;
`

export const Icon = styled.span`
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 250px;
    overflow: auto

`
