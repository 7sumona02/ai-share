import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-neutral-200'>
        <Folder />
    </div>
  )
}

export default page

const Folder = () => {
  return (
    <div className="relative">
      {/* Background image behind everything */}
      <img
        src="https://framerusercontent.com/images/CbGoZ9mPvp3B7u1vxPGQ2EwVKrc.png?scale-down-to=512&width=931&height=880"
        className="w-full absolute bottom-2 left-0 z-0 rounded-3xl"
      />

      {/* Folder top tab */}
      <div className="bg-white w-40 h-20 rounded-t-xl relative  z-20">
        <div className="w-5 h-5 bg-white absolute -right-5 bottom-0"></div>
        <div className="size-10 bg-neutral-200 rounded-full absolute -right-10"></div>
      </div>

      {/* Folder body */}
      <div className="bg-white rounded-b-lg rounded-tr-lg w-xs h-50 flex justify-center items-center text-2xl tracking-tight relative z-20">
        Files
      </div>
    </div>
  );
};
