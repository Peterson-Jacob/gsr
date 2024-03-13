import { useState } from 'react';


export default function Header() {

    const [Show, setShow] = useState(false);

    function handleShow(){
        setShow(!Show);
    }

    return (
      <>
        <header className="sticky top-0 z-10 bg-white py-1 border-b-4 border-red-600">

        <div className='max flex w-full'>       
        <div className="mx-2 lg:hidden hamburger">
            <div className="mt-5 w-7 my-0 mx-auto borderBar" onClick={handleShow}>
                <div className="w-7 h-0.5 bg-black m-1.5 duration-75 barOne"></div>
                <div className="w-7 h-0.5 bg-black m-1.5 duration-75 barTwo"></div>
                <div className="w-7 h-0.5 bg-black m-1.5 duration-75 barThree"></div>
            </div>
            <div>
            {Show &&
                <div className='fixed block z-50 left-0 w-full h-full bg-slate-50 text-black'>
                <ul className="">
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-t-4 border-b-4 border-black">Rent</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-black">Manage Rental</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-black">Buy</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-black">Deals</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-black">Rewards</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-black">Locations</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4 border-b-4 border-black">Business</li>
                    <li className="text-lg font-semibold my-4 mx-4 py-4  border-b-4 border-black">Support</li>

                <div className="flex-auto">
                <ul className='text-center'>
                    <li className="inline-block text-lg font-semibold my-4 mx-8 font-bold">Login</li>
                    <li className="inline-block text-lg font-semibold my-4 mx-8 font-bold">Join</li>
                </ul>
            </div>
                </ul>
                </div>}
            </div>
        </div>
        
        
            <div className="flex-auto">
                <h1 className="text-red-600 text-4xl text-center font-bold my-1 underline underline-offset-2 decoration-4 mx-8">Gash</h1>
            </div>
            <div className="flex-auto hidden lg:block">
                <ul>
                    <li className="inline-block my-4 mx-4">Rent</li>
                    <li className="inline-block mx-4">Manage Rental</li>
                    <li className="inline-block mx-4">Buy</li>
                    <li className="inline-block mx-4">Deals</li>
                    <li className="inline-block mx-4">Rewards</li>
                    <li className="inline-block mx-4">Locations</li>
                    <li className="inline-block mx-4">Business</li>
                    <li className="inline-block mx-4">Support</li>
                </ul>
            </div>
            <div className="hidden  flex-auto lg:block ">
                <ul>
                    <li className="inline-block my-4 mx-4 font-bold">Login</li>
                    <li className="inline-block my-4 mx-4 font-bold">Join</li>
                </ul>
            </div>
       

            
           </div>
        </header>

        
      </>
    );
  }