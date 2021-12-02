import React from "react";

interface IProps {
    value?: string,
    id?: string,
    name?: string,
    classes?: string,
    type?: string,
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IProps): JSX.Element => {
    const { value, classes, type, placeholder, id, name, onChange } = props;

    return (
        <input type={type ? type : "text"} value={value} className={`p-4 rounded-md border-black border ${classes}`} placeholder={placeholder} id={id} name={name} onChange={onChange}/>
    )
}

export default Input;