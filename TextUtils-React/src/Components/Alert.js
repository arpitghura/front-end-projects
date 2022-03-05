import React from 'react'

export default function Alert(props) {
    const captalize = (word)=>{
        const lower =  word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '30px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container py-2`} role="alert">
        <strong>{captalize(props.alert.type)} </strong>: {props.alert.msg}</div> }
        </div>
    )
}
