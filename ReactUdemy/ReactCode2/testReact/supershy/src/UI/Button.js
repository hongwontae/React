import {React, Fragment} from 'react';

const Button = ({children, BTN, test, Soccer = 'Ko'})=>{

    let Test = test;

    return (
        <Fragment>
           <BTN>{children}</BTN>
            <Test></Test>
            {Soccer}
        </Fragment>
    )
}

export default Button;