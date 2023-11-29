import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import profile from "../assets/profile.png"
const Navbar = () => {
  return (
    <div className='flex justify-between px-14 h-14 item-center bg-[#3f3f3f] opacity-95 sticky  text-white'>
        <div className='flex gap-6 items-center text-2xl'>
            <div>
                <IoMdMenu></IoMdMenu>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <FaYoutube className=' text-2xl text-red-600'></FaYoutube>
                <span>
                    Youtube
                </span>
            </div>
        </div>
        <div className=' flex items-center justify-center gap-5'>
            <form>
                <div className='flex bg-[#2e2e2e] justify-between h-10 items-center rounded-3xl pl-4 py-3 text-lg gap-4'>
                    <div className='flex items-center py-1'>
                        <input text="text" placeholder='Search' className='w-96 bg-[#2e2e2e] outline-none text-base'></input>
                    </div>
                    <button className='flex justify-center items-center w-16 bg-[#1f1f1f] h-10 rounded-r-3xl text-2xl'>
                        <CiSearch className=' mr-2'></CiSearch>
                    </button>
                </div>
            </form>
            <div className=' text-xl bg-[#1f1f1f] rounded-full p-3'>
                <FaMicrophone></FaMicrophone>
            </div>
        </div>
        <div className='flex gap-5 justify-center items-center text-xl'>
            <div >
                <RiVideoAddLine></RiVideoAddLine>
            </div>
            <div>
                <FaBell></FaBell>
            </div>
            <div>
                <img src={profile} alt="profile" className=' h-9 w-9 rounded-full'></img>
            </div>
        </div>
    </div>
  )
}

export default Navbar
