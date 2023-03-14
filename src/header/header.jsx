import React from "react";
import Global from '/public/image/icons8-globe-30.png'
export default function Header(params) {
    return(
        <div className="bg-red-800 lg:w-1/2 justify-center mx-auto p-2">
            <div className="flex flex-row  justify-center space-x-4">
              <img src={Global} alt="" className=""/>
              <h3 className="text-white tracking-widest">my travel Journey</h3>
            </div>
        </div>
    )
}