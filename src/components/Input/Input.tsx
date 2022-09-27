import React from 'react';


const Input: React.FC<{ value: string, fooChange: any }> = ({ value, fooChange }) => {

    return (
        <input value={value} type="text" onChange={(e) => fooChange(e.target.value)} />
    )
};



export default Input;