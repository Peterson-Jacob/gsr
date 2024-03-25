import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "./images/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {

    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show);

    }

    useGSAP(() => {
        if(show) {
            gsap.to(".hamburger", {width: '100%', duration: 2});
           // gsap.to(".item", {opacity: '100%', duration: 3, delay: 2});
        } 

    }, [show]);

    return (
      <>
        <header className="sticky top-0 z-10 bg-white py-1 border-b-4 border-red-600">

        <div className='max flex w-full'>       
        <div className="mx-2 lg:hidden">
            <div className="mt-5 w-7 my-0 mx-auto borderBar" onClick={handleShow}>
                <div className={`w-7 h-0.5 bg-black m-1.5 duration-75 barOne  ${show ? '-rotate-45 translate-y-2 ' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-black m-1.5 duration-75 barOne  ${show ? 'opacity-0' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-black m-1.5 duration-75 barOne  ${show ? 'rotate-45  -translate-y-2 ' : ''}`}></div>
            </div>
            <div>
            {show &&
                <div className='fixed block z-50 mt-5 left-0 w-0 h-full bg-white text-black overflow-hidden hamburger'>
                <ul className="">
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Rent</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Manage Rental</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Buy</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Deals</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Rewards</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Locations</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-red-600 cursor-pointer">Business</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4  border-b-4 border-red-600 cursor-pointer">Support</li>

                <div className="flex-auto">
                <ul className='text-center'>
                    <li className="inline-block text-lg font-semibold my-4 mx-8 font-bold cursor-pointer">Login</li>
                    <li className="inline-block text-lg font-semibold my-4 mx-8 font-bold cursor-pointer">Join</li>
                </ul>
            </div>
                </ul>
                </div>}
            </div>
        </div>
        
        
            <div className="flex-auto">
                {/* <h1 className="text-red-600 text-4xl text-center font-bold my-1 underline underline-offset-2 decoration-4 mx-8 logo">Gash</h1> */}
                <Link href="/"><Image src={logo} className='w-20 mt-1 mx-auto lg:w-24 2xl:w-28' /></Link>
            </div>
            <div className="flex-auto hidden lg:block">
                <ul>
                    <li className="inline-block mt-6 mx-4 cursor-pointer">Rent</li>
                    <li className="inline-block mx-4 cursor-pointer">Manage Rental</li>
                    <li className="inline-block mx-4 cursor-pointer">Buy</li>
                    <li className="inline-block mx-4 cursor-pointer">Deals</li>
                    <li className="inline-block mx-4 cursor-pointer">Rewards</li>
                    <li className="inline-block mx-4 cursor-pointer">Locations</li>
                    <li className="inline-block mx-4 cursor-pointer">Business</li>
                    <li className="inline-block mx-4 cursor-pointer">Support</li>
                </ul>
            </div>
            <div className="hidden  flex-auto lg:block ">
                <ul>
                    <li className="inline-block mt-6 mx-4 font-bold cursor-pointer">Login</li>
                    <li className="inline-block mt-6 mx-4 font-bold cursor-pointer">Join</li>
                </ul>
            </div>
       

            
           </div>
        </header>

        
      </>
    );
  }