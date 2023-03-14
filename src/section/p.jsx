import React from "react";
import Page from "./page";
import data from './data.jsx'

export default function Overall() {
    const dataInfo = data.map(
        (data)=> {
           return <Page
           key={data.item}
           image={data.img}
           location={data.locationImg}
           country={data.country}
           heading={data.heading}
           text={data.text}
           date={data.date}/>
        }
    )
    return(
        <div>
            {dataInfo}
        </div>
    )
}


/*
*/




























/*

export default function Overall(params) {
    const resolve = data.map(
        (data)=> {
          return <Page
          image={data.img}
          locationimage={data.locationImg}
          country={data.country}
          heading={data.heading}
          date={data.date}
          text={data.text}/>
        }
    )

    return(
      <div>
        {resolve}
      </div> 
    )
}


*/