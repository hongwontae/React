import React from 'react';
const Button = (props)=>{
    
    console.log(props.children)

    return(
        <React.Fragment>
            <button onClick={props.onClick}>
                {props.children}
            </button>
        </React.Fragment>
    )

}

export default Button;