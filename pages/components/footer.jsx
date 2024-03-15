


export default function Footer(){

    return(
        <>
            <div className="w-full bg-slate-100">

                <div>
                    <h2 className="text-xl sm:text-2xl font-bold pt-16 pb-4 text-center">Dash Away. Gash Rental Car!</h2>

                    <div className="w-11/12 my-0 pb-8 mx-auto">
                        <p className="text-xs sm:text-sm sm:text-center py-2"> 
                            At Gash Car Rental, we boast an extensive vehicle fleet, strategic locations,
                             and a dedication to exemplary service, ensuring your business trips, vacations, 
                             or special events exceed all expectations.
                        </p>
                        
                        <p className="text-xs sm:text-sm sm:text-center py-2">
                            For more than a century, Gash has been devoted to meeting our customers' mobility
                            requirements, ensuring we provide the perfect rental car for your individual circumstances.  
                        </p>

                    
                        <ul className="text-xs text-left w-5/6 sm:text-sm sm:w-2/3 my-0 mx-auto py-2 list-disc">
                             <li className="py-1">Transitioning into your brand-new dream home? Rent a pickup truck or a box truck to expedite the moving process.</li>
                             <li className="py-1"> Browse through our array of luxury cars to discover the ideal match for your occasion.</li>
                             <li className="py-1">Choose one of our electric vehicles for your rental and contribute to a greener way of living.</li>
                        </ul>

                        <p className="text-xs sm:text-sm sm:text-center py-2">
                            Regardless of whether it's your inaugural rental or your hundredth, we aim to ensure that you 
                            feel appreciated and rewarded every time. That's why we created an award-winning loyalty program called <span className="text-blue-500">Gash Rental Rewards.</span>
                        </p>

                        <p className="text-xs sm:text-sm sm:text-center py-2">
                        Gain access to exclusive perks, special offers, and accumulate points towards complimentary upgrades and
                        rental days simply by inputting your member number during checkout. And yes, joining is absolutely free!   
                        </p>    
                       
                        <p className="text-xs sm:text-sm sm:text-center py-2">
                            Don't hesitate any longer! Transform "no time" into "go time" and kickstart your car rental reservation with Gash today. 
                        </p>
                       

                    </div>

                </div>

            <div className="flex flex-wrap w-11/12 my-0 mx-auto lg:w-5/6 lg:pb-32  footerMax">
                <div className="flex-initial w-40 my-4 mx-auto">
                   <h3 className="text-lg font-bold ">Gash.com</h3>
                    <ul>
                        <li className="text-sm cursor-pointer my-1">Rental</li>
                        <li className="text-sm cursor-pointer my-1">Rent truck or Van</li>
                        <li className="text-sm cursor-pointer my-1">Locations</li>
                        <li className="text-sm cursor-pointer my-1">Rewards</li>
                        <li className="text-sm cursor-pointer my-1">Sitemap</li>
                    </ul>
                </div>

                <div className="flex-initial w-40 my-4 mx-auto">
                   <h3 className="text-lg font-bold ">Top Locations</h3>
                    <ul>
                        <li className="text-sm cursor-pointer my-1">Los Angeles</li>
                        <li className="text-sm cursor-pointer my-1">Orlando</li>
                        <li className="text-sm cursor-pointer my-1">San Diego</li>
                        <li className="text-sm cursor-pointer my-1">Las Vegas</li>
                        <li className="text-sm cursor-pointer my-1">Miami</li>
                        <li className="text-sm cursor-pointer my-1">New York</li>
                        <li className="text-sm cursor-pointer my-1">Denver</li>
                        <li className="text-sm cursor-pointer my-1">Phoenix</li>
                    </ul>
                </div>
                
                <div className="flex-initial w-40 my-4 mx-auto">
                   <h3 className="text-lg font-bold">About</h3>
                    <ul>
                        <li className="text-sm cursor-pointer my-1">Investor</li>
                        <li className="text-sm cursor-pointer my-1">Careers</li>
                        <li className="text-sm cursor-pointer my-1">Leadership Team</li>
                        <li className="text-sm cursor-pointer my-1">Press</li>
                        <li className="text-sm cursor-pointer my-1">Awards</li>
                    </ul>
                </div>

                <div className="flex-initial w-40 my-4 mx-auto ">
                   <h3 className="text-lg font-bold">Support</h3>
                    <ul>
                        <li className="text-sm cursor-pointer my-1">Contact Us</li>
                        <li className="text-sm cursor-pointer my-1">Get Receipt</li>
                        <li className="text-sm cursor-pointer my-1">Lost and Found</li>
                        <li className="text-sm cursor-pointer my-1">Accident Report</li>
                        <li className="text-sm cursor-pointer my-1">Vehicle Theft Report</li>
                        <li className="text-sm cursor-pointer my-1">Qualifications</li>
                        <li className="text-sm cursor-pointer my-1">Non-Smoking Policy</li>
                        <li className="text-sm cursor-pointer my-1">Weather & Travel Advisory</li>
                    </ul>
                </div>

                <div className="flex-initial w-40 my-4 mx-auto "> 
                   <h3 className="text-lg font-bold ">Traveler Resources</h3>
                    <ul>
                        <li className="text-sm cursor-pointer my-1">Travel Blog</li>
                        <li className="text-sm cursor-pointer my-1">Travel Destinations</li>
                        <li className="text-sm cursor-pointer my-1">Map</li>
                        <li className="text-sm cursor-pointer my-1"> International</li>
                        <li className="text-sm cursor-pointer my-1">Customers with Disabilites</li>
                    </ul>
                </div>
                
            </div>
            </div>
        </>
    );
}