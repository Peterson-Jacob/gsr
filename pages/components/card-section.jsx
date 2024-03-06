import Image from 'next/image';
import bmw from './images/bmw.jpg';
import jeep from './images/jeep.jpg';
import hyun from './images/hyundai.jpg';
import mazda from './images/mazda.jpg';

export default function Cardselect(){

    return(
        <>
            <div className="bg-slate-100  w-full " >
                <div>
                    <h1 className="text-center text-3xl pt-10 px-4 lg:text-5xl">Wander off path, Embrace the Journey.</h1>
                </div>

                <div className='flex flex-wrap lg:flex-inline w-11/12 my-0 mx-auto lg:w-full'>
 
                    <div className="relative w-full my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden sm:w-64  card">
                            <Image src={bmw} alt="" className="w-full h-64 lg:h-40  BMW"/>
                        <div className='bg-red-600 w-full h-1'></div>

                        <div className='w-11/12 my-0 mx-auto'>
                            <h2 className='text-xl font-bold my-4'>AAA memebers: Save up to 50% off rates.*</h2>
                            <p className='my-4 pb-4'>Great moments start here. Let's Go!</p>
                        </div>

                        <div className='bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
                        <p className='py-3 text-center text-blue-500 text-xl '>Book Now</p>
                    </div>

                    <div className=" w-full my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden sm:w-64  card">
                            <Image src={jeep} alt="" className="w-full  h-64 lg:h-40 Jeep"/>
                        <div className='bg-red-600 w-full h-1'></div>

                        <div className='w-11/12 my-0 mx-auto'>
                            <h2 className='text-xl font-bold my-4'>Unleash adventure with a Jeep</h2>
                            <p className='my-4 pb-4'> where rugged capability meets the open road in the ultimate journey of freedom.</p>
                        </div>

                        <div className='bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
                        <p className='py-3 text-center text-blue-500 text-xl '>Explore</p>
                    </div>

                    <div className=" w-full my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden sm:w-64  card">
                            <Image src={hyun} alt="" className="w-full  h-64 lg:h-40 hyun"/>
                        <div className='bg-red-600 w-full h-1'></div>

                        <div className='w-11/12 my-0 mx-auto'>
                            <h2 className='text-xl font-bold my-4'>Elevate your experiences, reap the rewards</h2>
                            <p className='my-4 pb-4'> Unleash a world of benefits with every step forward for your business.</p>
                        </div>

                        <div className='bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
                        <p className='py-3 text-center text-blue-500 text-xl '>Explore Business Rewards</p>
                    </div>

                    <div className=" w-full my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden sm:w-64  ">
                            <Image src={mazda} alt="" className="w-full  h-64 lg:h-40   mazda"/>
                        <div className='bg-red-600 w-full h-1'></div>

                        <div className='w-11/12 my-0 mx-auto'>
                            <h2 className='text-xl font-bold my-4'>Earn towards free retals and more with Gash Rewards.</h2>
                            <p className='my-4 pb-4'>Gash Rewards members benfit from the start.</p>
                        </div>

                        <div className='bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
                        <p className='py-3 text-center text-blue-500 text-xl '>Explore Business Rewards</p>
                    </div>
                </div>

                    <div className='w-1/3 my-4 mx-auto pb-12 flex lg:hidden'> 
                        <div className='w-4 h-4 my-0 mx-auto bg-black rounded-full '></div>
                        <div className='w-4 h-4 my-0 mx-auto bg-red-600 rounded-full'></div>
                        <div className='w-4 h-4 my-0 mx-auto bg-red-600 rounded-full'> </div>
                        <div className='w-4 h-4 my-0 mx-auto bg-red-600 rounded-full'></div>
                    </div>
            </div>
        </>
    )
}