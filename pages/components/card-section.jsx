import { useState } from 'react';
import Image from 'next/image';
import bmw from './images/bmw.jpg';
import jeep from './images/jeep.jpg';
import hyun from './images/hyundai.jpg';
import mazda from './images/mazda.jpg';
import { cardList } from './card-data';


function Part({index}){
    
    let card = cardList[index];
    const image = [bmw, jeep, hyun, mazda];
    

    return(

        <div className="relative w-full my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden sm:w-64  card">
            <Image src={image[index]} alt={card.image} className="w-full h-64 lg:h-40"/>
        <div className='bg-red-600 w-full h-1'></div>

        <div className='w-11/12 my-0 mx-auto'>
            <h2 className='text-xl font-bold my-4'>{card.header}</h2>
            <p className='my-4 pb-4'>{card.action}</p>
        </div>

        <div className='bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
            <p className='py-3 text-center text-blue-500 text-xl '>{card.select}</p>
        </div>
    )
}



export default function Cardselect(){
    const [index, setIndex] = useState(0);
    const [div1Clicked, setDiv1Clicked] = useState(true);
    const [div2Clicked, setDiv2Clicked] = useState(false);
    const [div3Clicked, setDiv3Clicked] = useState(false);
    const [div4Clicked, setDiv4Clicked] = useState(false);
    

    function oneClick(){
        setIndex(0);
        setDiv1Clicked(true);
        setDiv2Clicked(false);
        setDiv3Clicked(false);
        setDiv4Clicked(false);
    
    }

    function twoClick(){
        setIndex(1);
        setDiv1Clicked(false);
        setDiv2Clicked(true);
        setDiv3Clicked(false);
        setDiv4Clicked(false);
    }

    function threeClick(){
        setIndex(2);
        setDiv1Clicked(false);
        setDiv2Clicked(false);
        setDiv3Clicked(true);
        setDiv4Clicked(false);
        
    }

    function fourClick(){
        setIndex(3);
        setDiv1Clicked(false);
        setDiv2Clicked(false);
        setDiv3Clicked(false);
        setDiv4Clicked(true);
      }

    return(
        <>
            <div className="bg-slate-100 w-full " >
                <div>
                    <h1 className="text-center text-3xl pt-10 px-4 lg:text-5xl">Wander off path, Embrace the Journey.</h1>
                </div>

                <div className='flex flex-wrap lg:flex-inline w-11/12 my-0 mx-auto lg:w-full'>
                        <Part index={index} />
                        

                </div>

                <div className='w-1/3 my-4 mx-auto pb-12 flex md:hidden'>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div1Clicked ? 'bg-red-500' : 'bg-black'}`}  onClick={oneClick}></div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div2Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={twoClick} ></div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div3Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={threeClick}> </div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div4Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={fourClick}></div>
                
                </div>
            </div>
        </>
    )
}