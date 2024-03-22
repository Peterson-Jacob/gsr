import { useState } from 'react';
import Image from 'next/image';
import denver from './images/Denver.jpg';
import la from './images/LA.jpg';
import orlando from './images/Orlando.jpg';
import sanDeigo from './images/SanDeigo.jpg';
import lasVegas from './images/LasVegas.jpg';
import miami from './images/Miami.jpg';
import newYork from './images/NewYork.jpg';
import phoenix from './images/Phoenix.jpg';

function Component({index}){


    const image = [denver, la, orlando, sanDeigo, lasVegas, miami, newYork, phoenix, denver, la, orlando];
    const city = ["Denver", "Los Angeles", "Orlando", "San Deigo", "Las Vegas", "Miami", "New York", "Phoenix", "Denver", "Los Angeles", "Orlando"]; 

    return(
    <div className="relative flex-initial w-full my-12 mx-auto bg-white rounded shadow-md shadow-black  overflow-hidden sm:w-1/2 sm:mx-4 lg:w-1/4 2xl:w-1/5 2xl:mx-auto  card">
            <Image src={image[index]} alt={city[index]}  className="w-full h-48 lg:h-48"/>
        <div className='bg-red-600 w-full h-1'></div>

        <div className='w-11/12 h-24 my-0 mx-auto sm:h-32'>
            <h2 className='text-xl font-bold my-4'>{city[index]}</h2>
            <p className='my-4 pb-2'>Find out about renting in {city[index]}</p>
        </div>

        <div className=' bg-white w-1/2 mb-4 mx-auto border-2 border-black text-center text-xl font-bold py-2 hover:bg-red-600 hover:text-white cursor-pointer'><p>View</p></div>
       
    
    </div>
    )
}

export default function City(){
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
        setIndex(2);
        setDiv1Clicked(false);
        setDiv2Clicked(true);
        setDiv3Clicked(false);
        setDiv4Clicked(false);
    }

    function threeClick(){
        setIndex(4);
        setDiv1Clicked(false);
        setDiv2Clicked(false);
        setDiv3Clicked(true);
        setDiv4Clicked(false);
        
    }

    function fourClick(){
        setIndex(6);
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
        setIndex(4);
        setLastClicked(true);
        setFirstClicked(false);
        
    };

    function preClick(){
        if(index <= 0){
            setIndex(7)
        }else{
            setIndex(index - 1)
        }
    }

    function nextClick(){
        if(index > 7){
            setIndex(0)
         }else{
            setIndex(index + 1)
        }
    }

    return(
        <>
               <div className=" bg-white w-full " >
            <div className='max'>
                <div className='pt-8'>
                    <h1 className="text-center text-3xl pt-10 px-4 font-semibold sm:text-4xl lg:text-5xl">Top U.S. Locations</h1>
                </div>
                
            <div className='flex sm:hidden '>
                <div className='flex-initial w-1/6 my-auto mx-auto h-48 text-center' onClick={preClick}><p className='my-5 text-9xl font-thin cursor-pointer text-black'>&#8249;</p></div>
            
                    <Component index={index}/>    
            
                <div className='flex-initial w-1/6 my-auto mx-auto h-48 text-center' onClick={nextClick}><p className='my-5 text-9xl font-thin cursor-pointer text-black'>&#8250;</p></div>
            </div>

                <div className='hidden w-full my-0 mx-auto sm:flex sm:w-5/6 lg:hidden'>
                    <Component index={index}/> 
                    <Component index={index + 1}/> 
                                  
                </div>
                    <div className='hidden  my-0 mx-auto pb-10 lg:flex lg:w-5/6 xl:w-3/4'>

                        
                        <Component index={index}/> 
                        <Component index={index + 1}/>
                        <Component index={index + 2}/> 
                        <Component index={index + 3}/>      
                    </div> 
                
            <div className='hidden w-1/3 my-4 mx-auto pb-12 sm:flex lg:hidden'>
                <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div1Clicked ? 'bg-red-500' : 'bg-black'}`}  onClick={oneClick}></div>
                <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div2Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={twoClick} ></div>
                <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div3Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={threeClick}> </div>
                <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${div4Clicked ? 'bg-red-500' : 'bg-black'}`} onClick={fourClick}></div>
                
            </div>
         
                <div className='hidden w-40 my-4 mx-auto pb-12 lg:flex'>
                <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${firstTwoClicked ? 'bg-red-500' : 'bg-black'}`}  onClick={firstTwo}></div>
                <div className={`w-4 h-4 my-0 mx-auto rounded-full cursor-pointer ${lastTwoClicked ? 'bg-red-500' : 'bg-black'}`} onClick={lastTwo} ></div>
                
                </div> 
            </div>
        </div>
        </>
    );
}