import image from '../images/icon-star.svg';

import React from 'react';

import { Questions } from '../components/Questions.jsx';

 export function Container(){
    return (
        <>
       <section 
       className='flex-block items-center justify-left p-[20px]
        bg-white rounded-xl w-fitt min-w-[500px]  max-w-[700px] '> 
        
        <div className='flex bg-none mb-5'>
        <img src={image} alt="star" className=" w-10 mr-5 "/>
        <h1 className="font-bold text-5xl row-span-1 font-custom " >FAQs</h1>
        </div>
        <Questions /> 
        
       </section>
       
</>
    );
 }