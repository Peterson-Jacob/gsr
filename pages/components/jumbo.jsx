import Image from 'next/image';
import beach from "./images/beach-car.jpg";



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
                <div className='w-11/12 my-10 mx-auto bg-white h-52 rounded shadow-lg shadow-black border-b-4 border-red-600 rentPrompt'>

                    <div className='flex w-11/12 my-0 mx-auto'>
                        <div className=' flex-initial w-2/3 '>
                            <select className='mt-7 mr-4  py-0.5 border-2 rounded' id="drop-off">
                                <option value="same">Same Drop-off Location</option>
                                <option value="differnt">Differnt Drop-off Location</option>
                            </select>
                            <p className='text-lg text-blue-600 font-semibold inline-block'>Discount Code</p>
                        </div>
                        <div className='flex-initial w-1/3 mt-7'>
                            <p className='text-lg text-blue-600 font-semibold inline-block mr-2 '>View / Edit / Cancel</p>|
                            <p className='text-lg text-blue-600 font-semibold inline-block ml-2'>Extend My Rental</p>
                        </div> 
                    </div>

                    <div className='flex w-11/12 my-0 mx-auto'>
                        
                        <div className='relative flex-initial w-5/6 mr-0 mt-3 px-11 py-5 border-2 rounded pickupDiv'>
                            <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Pick-up Location</span>
                            <input type="text" className='absolute w-11/12 mt-2 mb-0 ml-1 text-xl left-0  outline-none'  />
                        </div>
                        <div className='hidden relative flex-initial w-2/5 mr-0 mt-3 px-11 py-5 border-2 rounded pickupDiv'>
                            <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Drop-off Location</span>
                            <input type="text" className='absolute w-11/12 mt-2 mb-0 ml-1 text-xl left-0  outline-none'  />
                        </div>


                        <div className='relative flex-initial w-1/4 ml-4 mr-0 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
                            <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Pick-up Date</span>
                            <input type="text" className='absolute w-11/12 mt-2 mb-0 ml-1 text-xl left-0  outline-none '  />
                        </div>
                        
                        <div className='relative flex-initial w-1/4 mr-4 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
                                <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Pick-up Time</span>
                                <select className='absolute w-11/12 mt-3 mb-0 ml-1 text-lg text-center left-0  outline-none' id="drop-off">
                                 <option value="8am">8:00 AM</option>
                                 <option value="9am">9:00 AM</option>
                                 <option value="10am">10:00 AM</option>
                                 <option value="11am">11:00 AM</option>
                                 <option value="12pm">12:00 PM</option>
                                 <option value="1pm" selected>1:00 PM</option>
                                 <option value="2pm">2:00 PM</option>
                                 <option value="3pm">3:00 PM</option>
                                 <option value="4pm">4:00 PM</option>
                                 <option value="5pm">5:00 PM</option>
                                 <option value="6pm">6:00 PM</option>
                                 <option value="7pm">7:00 PM</option>
                            </select>
                        </div>

                        <div className='relative flex-initial w-1/4 mr-0 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
                            <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Drop-off Date</span>
                            <input type="text" className='absolute w-11/12 mt-2 mb-0 ml-1 text-xl left-0  outline-none'  />
                        </div>
                        
                        <div className='relative flex-initial w-1/4 mr-4 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
                                <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Drop-off Time</span>
                                <select className='absolute w-11/12 mt-3 mb-0 ml-1 text-lg text-center left-0  outline-none' id="drop-off">
                                 <option value="8am">8:00 AM</option>
                                 <option value="9am">9:00 AM</option>
                                 <option value="10am">10:00 AM</option>
                                 <option value="11am">11:00 AM</option>
                                 <option value="12pm">12:00 PM</option>
                                 <option value="1pm" selected>1:00 PM</option>
                                 <option value="2pm">2:00 PM</option>
                                 <option value="3pm">3:00 PM</option>
                                 <option value="4pm">4:00 PM</option>
                                 <option value="5pm">5:00 PM</option>
                                 <option value="6pm">6:00 PM</option>
                                 <option value="7pm">7:00 PM</option>
                            </select>
                        </div>
                       
                        <div className='relative flex-initial w-1/4 mr-4 mt-3 px-11 py-5 bg-red-600 cursor-pointer hover:shadow hover:shadow-black dateupDiv'>
                            <p className='text-xl font-bold text-white'>Continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}