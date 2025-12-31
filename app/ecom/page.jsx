'use client'
import {motion} from 'motion/react'

const page = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-neutral-900'>
       {/* <div className='perspective-midrange w-72 flex flex-col items-center justify-center font-mono border-2 border-black p-5'>
         <motion.img src='/girl.png' className='w-40 transform-3d animate-rotateSteps' 
          />
          <div className='w-full flex justify-between items-center mt-3'>
            <div>FV17</div>
            <div>$22.00</div>
          </div>
          <div className='w-full flex justify-center items-center mt-3 uppercase bg-black p-2 text-white text-sm cursor-pointer hover:outline-2 outline-offset-2 outline-black'>
            <div>buy now</div>
          </div>
       </div> */}

       <div className='perspective-midrange w-72 flex flex-col items-center justify-center font-mono border-2 border-white p-5 bg-[#f2529d]'>
         <motion.img src='/girl.png' className='w-40 transform-3d animate-rotateSteps' 
          />
          <div className='w-full flex justify-between items-center mt-3 text-white'>
            <div>FV17</div>
            <div>$22.00</div>
          </div>
          <div className='w-full flex justify-center items-center mt-3 uppercase bg-white p-2 text-[#f2529d] text-sm cursor-pointer hover:outline-2 outline-offset-2 outline-white'>
            <div>buy now</div>
          </div>
       </div>
    </div>
  )
}

export default page