import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Sidebar = () => {
    const sidemenuItems=[
        {
            icon:<GoHome></GoHome>,
            title:"Home"
        },
        {
            icon:<SiYoutubeshorts/>,
            title:"Shorts"
        },
        {
            icon:<MdSubscriptions/>,
            title:"Subscription"
        },
        {
            icon:<SiYoutubemusic/>,
            title:"Youtubemusic"
        }
    ];
    const sidemenuItems2=[
            {
                icon:<FaHistory/>,
                title:"History"
            },
            {
                icon:<IoMdDownload/>,
                title:"Downloads"
            }
    ]
  return (
    <div className=' flex flex-col w-60 bg-[#3a3939] text-white text-lg h-screen px-2 py-2 gap-4'>
        <ul className='flex flex-col border-b-1'>
            {sidemenuItems.map(({icon,title})=>{
                return(
                    <li key={title} className='px-3 py-1 flex gap-5 hover:bg-[#5e5d5d] items-center rounded-xl '>
                        <a href="#">{icon}</a>
                        <span>{title}</span>
                    </li>
                )
            })}
        </ul>
        <hr className='w-29 h-2  border-[#5e5d5d] '/>
        <ul className='flex flex-col  border-b-1'>
            {sidemenuItems2.map(({icon,title})=>{
                return(
                    <li key={title} className='px-3 py-1 flex gap-5 hover:bg-[#5e5d5d] items-center rounded-xl '>
                        <a href="#">{icon}</a>
                        <span>{title}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar
