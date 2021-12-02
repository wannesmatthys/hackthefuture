import React from "react";

const Notepad = (): JSX.Element => {
    return (
        <div className="w-full h-full">
            <h1 className="text-3xl mb-5">Notepad</h1>

            <div className="flex justify-between">
                <div className="border-r border-white w-1/3">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Moordenaars</h3>

                    <ul className="text-xl leading-10">
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                    </ul>
                </div>
                <div className="border-r border-white w-1/3 pl-5">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Moordwapens</h3>

                    <ul className="text-xl leading-10">
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li className="text-gray-500 line-through">Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                    </ul>
                </div>
                <div className=" w-1/3 pl-5">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Plaats delict</h3>

                    <ul className="text-xl leading-10">
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                        <li>Bill Bridge</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notepad;
