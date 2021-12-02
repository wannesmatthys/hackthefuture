import React from "react";

interface IProps {
    value: string,
    classes?: string,
    type?: string,
    placeholder?: string
}

const Input = (props: IProps): JSX.Element => {
    const { value, classes, type, placeholder } = props;

    return (
        <input type={type ? type : "text"} value={value} className={`p-4 rounded-md border-black border ${classes}`} placeholder={placeholder} />
    )
}

export default Input;