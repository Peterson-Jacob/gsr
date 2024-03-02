import Image from 'next/image';
import beach from "./images/beach-car.jpg";
import view from "./images/beach-view.jpeg";



export default function Jumbo(){
    return(
        <>
            <div className=''>
                <Image src={beach} alt="picture provided by Nubia Navarro" className="w-full beach"/>
            </div>

            <div className='w-full jprompt'>
                <div className='w-11/12 my-0 mx-auto'>
                    <h1 className='text-5xl text-white font-semibold tagline'>Dash Away with Gash Rental Car!</h1>
                </div>
                <div className='w-11/12 my-10 mx-auto bg-white h-52 rounded shadow-lg shadow-black border-b-4 border-red-600'>

                    <div className='flex w-11/12 my-0 mx-auto'>
                        <div className=' flex-initial w-2/3 '>
                            <select className='my-7 mr-4  py-0.5 border-2 rounded' id="drop-off">
                                <option value="same">Same Drop-off Location</option>
                                <option value="differnt">Differnt Drop-off Location</option>
                            </select>
                            <p className='text-lg text-blue-600 font-semibold inline-block'>Discount Code</p>
                        </div>
                        <div className='flex-initial w-1/3 my-7'>
                            <p className='text-lg text-blue-600 font-semibold inline-block mr-2 '>View / Edit / Cancel</p>|
                            <p className='text-lg text-blue-600 font-semibold inline-block ml-2'>Extend My Rental</p>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}