import Image from 'next/image';
import bmw from './images/bmw.jpg';

export default function Cardselect(){

    return(
        <>
            <div className="bg-slate-100  w-full " >
                <div>
                    <h1 className="text-center text-3xl pt-10 px-4 lg:text-5xl">Wander off path, Embrace the Journey.</h1>
                </div>

                <div className=''>
                    <div className="w-5/6 my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden card">
                            <Image src={bmw} alt="" className="w-full  BMW"/>
                        <div className='bg-red-600 w-full h-1'></div>

                        <div className='w-11/12 my-0 mx-auto'>
                            <h2 className='text-xl font-bold my-4'>AAA memebers: Save up to 50% off rates.*</h2>
                            <p className='my-4 pb-4'>Great moments start here. Let's Go!</p>
                        </div>

                        <div className='bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
                        <p className='py-3 text-center text-blue-500 text-xl '>Book Now</p>
                    </div>
                </div>
            </div>
        </>
    )
}