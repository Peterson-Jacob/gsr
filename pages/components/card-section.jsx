import { useState } from 'react';
import Image from 'next/image';
import bmw from './images/bmw.jpg';
import jeep from './images/jeep.jpg';
import hyun from './images/hyundai.jpg';
import mazda from './images/mazda.jpg';
import { cardList } from './card-data';


function Part({index}){
    
    let card = cardList[index];
    const image = [bmw, jeep, hyun, mazda, bmw];
    

    return(

    <div className="relative  my-12 mx-auto bg-white rounded shadow-md shadow-black overflow-hidden sm:w-1/2 sm:mx-4 lg:w-1/4 2xl:w-1/5 2xl:mx-auto  card">
        <Image src={image[index]} alt={card.name}  className="w-full h-64 lg:h-48"/>
    <div className='bg-red-600 w-full h-1'></div>

    <div className='w-11/12 h-32 my-0 mx-auto sm:h-40'>
        <h2 className='text-xl font-bold my-4'>{card.header}</h2>
        <p className='my-4 pb-4'>{card.action}</p>
    </div>

        <div className=' bg-slate-100 w-11/12 my-0 mx-auto h-0.5'></div>
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
    const [firstTwoClicked, setFirstClicked] = useState(true);
    const [lastTwoClicked, setLastClicked] = useState(false);
    

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

    function firstTwo(){
        
        setIndex(0);
        setFirstClicked(true);
        setLastClicked(false);
        
    }
    
    function lastTwo() {
        setIndex(2);
        setLastClicked(true);
        setFirstClicked(false);
        
    };

    return(
        <>
        <div className=" bg-slate-100 w-full " >
            <div className='max'>
                <div className='pt-8'>
                    <h1 className="text-center text-3xl pt-10 px-4 font-semibold sm:text-4xl lg:text-5xl">Wander off path, Embrace the Journey.</h1>
                </div>
                
                <div className='flex flex-wrap w-11/12 my-0 mx-auto sm:hidden '>
                        <Part index={index} />       
                </div>
                <div className='hidden w-full my-0 mx-auto sm:flex lg:hidden'>
                
                            <Part index={index} />
                            <Part index={index + 1} />       
                </div>
                    <div className='hidden  my-0 mx-auto pb-10 lg:flex lg:w-full'>
                            <Part index={0} />
                            <Part index={1} />   
                            <Part index={2} />   
                            <Part index={3} />       
                    </div> 
                

                <div className='w-1/3 my-4 mx-auto pb-12 flex sm:hidden'>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div1Clicked ? 'bg-red-500' : 'bg-black'}`}  onClick={oneClick}></div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div2Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={twoClick} ></div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div3Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={threeClick}> </div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div4Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={fourClick}></div>
                
                </div>

                <div className='hidden w-1/5 my-4 mx-auto pb-12  sm:flex lg:hidden'>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${firstTwoClicked ? 'bg-red-500' : 'bg-black'}`}  onClick={firstTwo}></div>
                    <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${lastTwoClicked ? 'bg-red-500' : 'bg-black'}`} onClick={lastTwo} ></div>
                
                </div> 
            </div>
        </div>
        </>
    )
}