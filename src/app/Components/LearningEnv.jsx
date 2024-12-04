import React from 'react'
import { LearningCards } from './learningCards'
import { Star } from 'lucide-react';

const LearningEnvironment = () => {
    const bgColors = [
        'bg-[#fab6c6]',
        'bg-[#a8d657]',
        'bg-[#f5e74c]'
    ];
    const IconColors = [
        'fill-purple-700 text-purple-700',
        'fill-[#1a9881] text-[#1a9881] ',
        'fill-[orangered] text-[orangered] ',
    ];
    return (
        <div className= '  shadow-lg mx-3 md:mx-5 lg:mx-20 px-10 py-5  rounded-md my-14'>
            <h1 className=' text-3xl sm:text-3xl md:text-5xl pt-9'>Unique Learning <br />
                Environment</h1>
            
            
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 gap-5 md:gap-3 lg:gap-6'>
                {
                    LearningCards && LearningCards.map((data, index) => (
                        <div key={index} className={` rounded-md px-2 py-14 ${bgColors[index]}`}>
                            <div className=' flex items-start gap-3 '>
                                <Star
                                    className={`${IconColors[index]}`}
                                    alt="Preschool logo"
                                    src="/image/star.svg"
                                    width={30}
                                    height={30}
                                />
                                <p className=' text-xl w-full'>{data.description}</p>
                            </div>
                            <h2 className='text-2xl font-bold flex justify-center pt-5'>{data.title}</h2>
                        </div>


                    ))
                }
             </div>
            
        </div>
    )
}

export default LearningEnvironment
