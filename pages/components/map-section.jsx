import Image from 'next/image';
import map from "./images/map.png";

export default function Map(){

    return(
        <>
            <div className='relative mb-48 lg:mb-80'>
                <Image src={map} alt="map of southeastern United States" className="w-full h-80 lg:h-96 map"/>

            
                <div className='absolute top-20 left-0 right-0 w-11/12 bg-white shadow-lg shadow-black mx-auto py-4 lg:top-40 lg:left-20 lg:right-20 lg:w-3/5 mapMax'>
                    <h1 className='w-11/12 text-center text-3xl font-bold mt-10 mb-4 mx-auto sm:text-5xl sm:mb-8'>Perfect journey, Conveniently close.</h1>
                    <p className='text-center text-xl w-11/12 my-0 mx-auto font-normal sm:text-3xl sm:w-5/6 lg:w-3/5'>With countless local destinations across the country, we're just a stone's throw away from you</p>
                    <div className='w-11/12 mt-8 mb-12 mx-auto py-4 border-2 border-black text-center text-2xl font-semibold sm:w-80 lg:w-96 lg:py-6'><p>Nerby Locations</p></div>
                </div>
        
            </div>
        </>
    )
}