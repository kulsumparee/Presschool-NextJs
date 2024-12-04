import React from 'react'
import { StepsCardData } from './StepsCardData'
import { Star } from 'lucide-react'
import Button from './button';

const EasySteps = () => {
    const IconColors = [
        'fill-yellow-400 text-yellow-400',
        'fill-[#63edd4] text-[#63edd4] ',
        'fill-purple-600 text-purple-600',
    ];
  return (
      <div className=" w-full h-full bg-[url('/image/section3.webp')] bg-fixed bg-cover bg-center px-5 lg:px-20 pb-10">

          <div className=' text-5xl font-semibold py-20'>
              Three easy steps <br />
              to successful <br />
              future <br />
          </div>
          
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 lg:gap-8'>
              {StepsCardData.map((data, index) => (
                  <div key={index} className='flex gap-8 bg-white w-full rounded-md p-5 pb-10'>
                      <div className=' items-center'>
                          <div className=' flex text-center gap-3 py-5'>
                              <Star
                                    className={`${IconColors[index]}`}
                                    alt="Preschool logo"
                                    src="/image/star.svg"
                                    width={30}
                                    height={30}
                                />
                        
                              <h1 className='text-2xl font-semibold'>{data.title}</h1>
                          </div>
                          <div className='ml-4'> 
                              <p>{data.para}</p>
                          </div>
                          <div className="">
                              <Button title="Enroll Child" className=" hover:bg-pink-400 w-full my-5 " />
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default EasySteps