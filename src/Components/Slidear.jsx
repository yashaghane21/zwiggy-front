

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import r from "../assets/yash.webp"
import t from "../assets/q.webp"
import e from "../assets/e.webp"
import f from "../assets/b.webp"
const Slidear = () => {
   

    return (
        <Slide>
            <div className="each-slide-effect flex items-center justify-center sm:overflow-scroll bg-slate-950">
                   <img  className=" h-[300px] p-5 w-[300px]  hover:border-2 border-yellow"src={r} /> 
            </div>
            <div className="each-slide-effect bg-slate-950">
            <img  className="p-5 h-[300px] w-[300px] "src={t} /> 
            </div> 
            <div className="each-slide-effect bg-slate-950">
           <img  className="h-[300px] p-5 w-[300px] "src={e} /> 
            </div>
            <div className="each-slide-effect bg-slate-950">
           <img  className="h-[300px] p-5 w-[300px] "src={f} /> 
            </div>
        </Slide>
    );
};

export default Slidear
