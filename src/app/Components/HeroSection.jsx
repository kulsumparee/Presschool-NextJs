import React from 'react'
import Button from './button'
import { Star } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className=" w-full min-h-[80vh] bg-[url('/image/section.png')] bg-fixed bg-cover bg-center h-screen">
            <div className='absolute inset-0 left-52 top-28 p-4 sm:p-6 md:p-8 lg:p-10'>
                <div className='container mx-auto '>
                    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                      
                        <div className='text-center lg:text-left'>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight lg:leading-snug max-w-xl'>
                                Welcome to
                                Preschool
                            </h1>

                           <div className='flex gap-4 sm:gap-6 justify-center lg:justify-start mt-6 sm:mt-8'>
                                <Button title="Learn More" />
                                <Button title="Lets Go" />
                            </div>
                        </div>

                       <div className='w-full max-w-xs'>
                            <div className='bg-white rounded-md p-6 sm:p-8 flex items-start gap-4 shadow-lg'>
                                <Star
                                    className=' fill-green-400 text-green-400 '
                                    alt="Preschool logo"
                                    src="/image/star.svg"
                                    width={30}
                                    height={30}
                                />
                                <div className='text-xl sm:text-2xl font-medium'>
                                    Welcome Place <br/>
                                    For Every Child
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection