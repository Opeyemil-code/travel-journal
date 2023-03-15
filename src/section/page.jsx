import React from "react";


export default function Page(props) {
    return(
    <div className="lg:w-1/2  lg:mx-auto mt-10    bg-pink-90">
        <div className="flex lg:flex-row lg:space-x-6 flex-col">

         
           <img src={props.display.img} alt="" className="lg:w-96 lg:h-60"/>
         

          <div className="flex flex-col  ">

           <div className="flex flex-row space-x-2 mt-4">
           <img src={props.display.locationImg} alt="" className="w-6 h-6"/>
           <h1 className="text-md font-bold">{props.display.country}</h1>
           <p className="underline">views on google map</p>
           </div>
           <h1 className="text-3xl font-bold mt-1">{props.display.heading}</h1>
           <h2 className="mt-4 font-bold">{props.display.date}</h2>
           <p className="mt-2 italic">{props.display.text}</p>
          </div>

        </div>

    </div>
    )
}