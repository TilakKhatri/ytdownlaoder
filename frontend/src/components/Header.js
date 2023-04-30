import React, { useState } from "react";
import { AiOutlineCloudDownload } from 'react-icons/ai';

export default function Header() {

    return (
        <div className="container 2xl:mx-auto ">
            <div className="bg-white shadow-lg py-3 px-7 fixed top-0 w-full ">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <div>
                            <AiOutlineCloudDownload
                                fontSize="60px"
                                color="black"
                            />
                       </div>
                        <h2 className="font-normal text-2xl leading-6 text-gray-800">ytdownloder.me</h2>
                    </div>
                    <div className="flex flex-row space-x-16">
                        <p className="text-lg underline font-medium cursor-pointer">About</p>
                        <p className="text-lg underline font-medium cursor-pointer">Help</p>
                   </div>
                    
                </nav>
             
            </div>
        </div>

    );
}
