import { useState } from 'react';
import Image from 'next/image';
import beach from "./images/beach-car.jpg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



export default function Jumbo(){

    const [select, setSelect] = useState(true);
    const [dateup, setDateup] = useState(null);
    const [calendaropen, setCalendaropen ] = useState(false);
    const [dropdate, setDropdate] = useState(null);
    const [calendardrop, setCalendardrop ] = useState(false);
  
    function handle(){
        setSelect(!select);

    }

    function handleopenCalendar(){
        setCalendaropen(!calendaropen);
        setCalendardrop(false);
    }

    function handledropCalendar(){
        setCalendardrop(!calendardrop);
        setCalendaropen(false);
    }

    function handleDateSelection(date) {
        if(calendaropen) {
            setDateup(date);
        } else if(calendardrop) {
            setDropdate(date);
        }
    }


    return(
        <>
        <div className='max'>
            <div className=''>
                <Image src={beach} alt="picture provided by Nubia Navarro" className="w-full beach"/>
            </div>

            <div className=' w-full jprompt'>
                <div className='w-11/12 my-0 mx-auto 2xl:w-3/4'>
                    <h1 className='text-3xl font-bold text-white lg:font-semibold lg:text-5xl tagline'>Dash Away. Gash Rental Car!</h1>
                </div>
                <div className='w-11/12 z-0 my-6 lg:my-10 mx-auto bg-white lg:h-52 lg:rounded lg:shadow-lg lg:shadow-black lg:border-b-4 lg:border-red-600 2xl:w-3/4 rentPrompt'>

                    <div className='flex flex-wrap lg:flex-nowrap lg:w-11/12 my-0 lg:mx-auto'>
                        <div className=' flex-initial w-full text-center lg:text-left lg:w-3/5 '>
                            <select className='my-2 mr-4 py-0.5 border-2 rounded lg:mt-7' id="drop-off" onChange={handle}>
                                <option value="same" >Same Drop-off Location</option>
                                <option value="differnt" >Differnt Drop-off Location</option>
                            </select>
                            <p className='text-lg text-blue-600 font-semibold inline-block'>Discount Code</p>
                        </div>
                        <div className='flex-initial w-full text-center mt-2 lg:w-2/5 lg:mt-7'>
                            <p className='text-lg text-blue-600 font-semibold inline-block mr-2 '>View / Edit / Cancel</p>|
                            <p className='text-lg text-blue-600 font-semibold inline-block ml-2'>Extend My Rental</p>
                        </div> 
                    </div>

                    <div className='flex flex-wrap w-full lg:flex-nowrap lg:w-11/12 my-0 mx-auto'>
                        
                        <div className='relative flex-initial w-full lg:w-full'>
                            <div className={`relative inline-block mr-0 mt-3 px-11 py-5 border-2 rounded pickupDiv ${select ? 'w-full' : 'w-1/2'}`} >
                                <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Pick-up Location</span>
                                <input type="text" className='absolute w-11/12 mt-2 mb-0 ml-1 text-xl left-0  outline-none'  />
                            </div>
                            <div className={`relative inline-block w-1/2 mr-0 mt-3 px-11 py-5 border-2 rounded pickupDiv ${select ? 'hidden' : 'block'}`}>
                                <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Drop-off Location</span>
                                <input type="text" className='absolute w-11/12 mt-2 mb-0 ml-1 text-xl left-0  outline-none'  />
                            </div>
                        </div>


                        <div className='relative flex-initial w-1/2 lg:w-1/6 lg:ml-4 xl:w-1/4 mr-0 mt-3 px-11 py-5 border-2 rounded dateupDiv' >
                            <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Pick-up Date</span>
                            <input type="text" className='absolute w-11/12 mt-3 mb-0 ml-1 text-xl lg:text-lg left-0  outline-none ' onClick={handleopenCalendar}   value={dateup ? `${dateup.getMonth() + 1}/${dateup.getDate()}/${dateup.getFullYear()}` : ''}/>    
                        </div>
                       
                        
                        <div className='relative flex-initial w-1/2 lg:w-1/6 lg:mr-4 xl:w-1/4 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
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

                        <div className='relative flex-initial w-1/2 lg:w-1/6 xl:w-1/4 mr-0 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
                            <span className='absolute top-0 left-0 mt-1 ml-1 text-sm text-slate-400 font-bold'>Drop-off Date</span>
                            <input type="text" className='absolute w-11/12 mt-3 mb-0 ml-1 text-xl lg:text-lg left-0  outline-none' onClick={handledropCalendar} value={dropdate ? `${dropdate.getMonth() + 1}/${dropdate.getDate()}/${dropdate.getFullYear()}` : ''} />
                        </div>
                        
                        <div className='relative flex-initial w-1/2 lg:w-1/6 lg:mr-4 xl:w-1/4 mt-3 px-11 py-5 border-2 rounded dateupDiv'>
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
                       
                        <div className='relative flex-initial w-full lg:w-1/4 lg:mr-0 mt-3 px-11 py-5 bg-red-600 cursor-pointer hover:shadow hover:shadow-black dateupDiv'>
                            <p className='text-xl font-bold text-white text-center'>Continue</p>
                        </div>
                    </div>
                    <div className={` ${calendaropen ? 'block' : 'hidden'}`}>
                            <Calendar onChange={handleDateSelection} value={dateup} className='absolute top-40 left-20 lg:relative lg:top-0 lg:left-0 lg:my-2 lg:mx-auto ' onClickDay={handleopenCalendar} />
                    </div>
                    <div className={` ${calendardrop ? 'block' : 'hidden'}`}>
                            <Calendar onChange={handleDateSelection} value={dropdate} className='absolute top-40 left-20 lg:relative lg:top-0 lg:left-0 lg:my-2 lg:mx-auto' onClickDay={handledropCalendar} />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}