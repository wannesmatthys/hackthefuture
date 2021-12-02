import React from "react";

interface IProps {
    text: string,
    classes?: string,
    type?: "button" | "submit",
    onClick?: () => void
}

const Button = (props: IProps): JSX.Element => {
    const { text, classes, type, onClick } = props;

    return (
        <button type={type ? type : "button"} className={`px-6 py-4 bg-black text-white rounded-md text-center ${classes}`} onClick={onClick}>{ text }</button>
    )
}

export default Button;