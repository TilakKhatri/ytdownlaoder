import React, { useState } from 'react';
import { ImYoutube2 } from 'react-icons/im';
import { AiOutlineDownload } from 'react-icons/ai';
import{Link} from 'react-router-dom'
import axios from 'axios';
import logo from "../assets/ytlogo.svg";

function Main() {
    const [urlValue, setUrlValue] = useState("");
    const [data, setData] = useState(null);

    const handleDownload = async () => {
        const data = await axios.get(
            `http://localhost:4000/download?url=${urlValue}`
        );
        setData(data);
        setUrlValue("");
        console.log(data.info.title)
    };

    return (
        <div className=" bg-gray-100 flex flex-col  items-center min-h-screen mt-4">
            <div className="flex flex-row items-center mt-8">
                <div>
                    <ImYoutube2 size="60px" />
                </div>
                <div className="text-2xl font-bold">
                    <h1 className='lg:text-4xl'>
                        Download Anything from <span className='text-red-600'>youtube</span>
                    </h1>
                </div>
            </div>
            <div className='flex flex-col mt-4 items-center'>
                <div className="flex flex-row items-center space-x-2 mb-4">
                    <div className=''>
                        <input
                            type="text"
                            placeholder="Enter url"
                            value={urlValue}
                            onChange={(e) => setUrlValue(e.target.value)}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                        />
                    </div>
                    <div className=" bg-red-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-red-600">
                        <button onClick={handleDownload} className="text-xl">download</button>
                    </div>

                </div>
                {/* <p>By using our service you accept our <span className='text-blue-500 underline'>Terms of Service</span> and<span className='text-blue-500 underline'> PrivacyPolicy</span></p> */}

            </div>

            <div>
                {data !== null ? (
                    <div className='my-4 '>

                        <div className="my-4">
                            <iframe
                                width="570"
                                height="320"
                                src={`${data.data.url}`}
                                title="video"
                            />
                        </div>

                        <div>
                            {data?.data.info.map((formatName, index) => (
                                <div key={index} className='flex flex-row justify-between items-center my-2'>
                                    <div className='text-xl font-medium text-gray-700'> 
                                        {formatName.mimeType.split(";")[0] + "  "}
                                        {formatName.hasVideo ? formatName.height + "p" : ""}
                                    </div>
                                    <div className=" bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-red-600">
                                        <a
                                            href={formatName.url}
                                            target="_blank"
                                            download
                                            className=" outline-none italic underline"
                                        ><AiOutlineDownload /> </a>
                                    </div>
                                    
                                </div>

                            ))}

                        </div>
                    </div>
                ) : (
                    <div className=" text-gray-500 font-bold mt-10">copy and paste youtube video url into above input.</div>
                )}
            </div>
        </div>
    )
}

export default Main;