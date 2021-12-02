import React from "react";

interface IProps {
    text: string,
    classes?: string
}

const Button = (props: IProps): JSX.Element => {
    const { text, classes } = props;

    return (
        <button className={`px-6 py-4 bg-black text-white ${classes} rounded-md text-center`}>{ text }ddd</button>
    )
}

export default Button;