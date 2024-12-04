import React from 'react'
import { StepsCardData } from './StepsCardData'
import { Star } from 'lucide-react'

const EasySteps = () => {
    const IconColors = [
        'fill-orange-700 text-orange-700',
        'fill-[#63edd4] text-[#63edd4] ',
        'fill-purple-600 text-purple-600',
    ];
  return (
      <div className=" w-full min-h-[80vh] bg-[url('/image/section3.webp')] bg-fixed bg-cover bg-center h-screen">

          <div className=' text-5xl font-semibold'>
              Three easy steps <br />
              to successful <br />
              future <br />
          </div>
          
          <div className=' grid grid-cols-3 gap-8'>
              {StepsCardData.map((data, index) => (
                  <div key={index} className='flex gap-8 bg-white w-full rounded-md p-5 '>
                      <div className=' items-center'>
                          <div className=' flex text-center gap-3'>
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
                          <div>
                              
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default EasySteps