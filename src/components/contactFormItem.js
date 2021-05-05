import React from "react"

const ContactFormItem = (props) => {

    const changeHandler = (value) => {
        props.handler(props.inputName, value.target.value);
    }

    let textArea;
    if (!props.isTextArea) {
        textArea = <input type = {props.inputType} class = "input1" onChange = {changeHandler}></input>;
    } else {
        textArea = <textarea type = {props.inputType} class = "input1" onChange = {changeHandler}></textarea>;
    }

    return (
        <div class = "wrap">
            <label class = {props.inputName}>
                {props.inputName}
            </label>
            {textArea}
            </div>
    )
}

export default ContactFormItem