import React from 'react';
import * as s from './style';

const Form: React.FC<{text:string}> = ({text}) => {

    return(
        <s.Form>
            <s.Input />
            <s.Button > {text}</s.Button>
        </s.Form>
    )
}

export default Form;
