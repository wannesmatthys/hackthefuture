import React from "react";

interface IProps {
    text: string,
    classes?: string,
    onClick?: () => void
}

const Button = (props: IProps): JSX.Element => {
    const { text, classes, onClick } = props;

    return (
        <button className={`px-6 py-4 bg-black text-white ${classes} rounded-md text-center`} onClick={onClick}>{ text }</button>
    )
}

export default Button;