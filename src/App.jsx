// import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <div className='bg-[#e0f1e7] h-screen w-screen flex flex-col justify-center items-center'>
       <div className='bg-white p-[36px] rounded-xl'>
          <h1 className='text-[28px] font-semibold font-roboto'>Contact Us</h1>
          <form className='flex flex-col'>

             <div className='flex space-x-4 pt-6'>
               <div className='flex flex-col'>
                <label htmlFor="First Name" className='text-[15px] text-[#464646] pb-[7px]'>First Name<sapn className="pl-[8px] text-green-500">*</sapn></label>
                <input type="text" className='border border-gray-300 p-[10px] w-72 rounded-md'/>
               </div>
              

              <div className='flex flex-col'>
              <label htmlFor="Last Name" className='text-[15px] text-[#464646] pb-[7px]'>Last Name<sapn className="pl-[8px] text-green-500">*</sapn></label>
              <input type="text" className='border border-gray-300k p-[10px] w-72 rounded-md'/>
              </div> 
            </div>
  
          
            <label htmlFor="email" className='text-[15px] text-[#464646] pb-[7px] pt-[20px]'>Email Address<sapn className="pl-[8px] text-green-500">*</sapn></label>
            <input type="email" className='border border-gray-300 p-[10px] rounded-md'/>
          

           
            <label htmlFor="email" className='text-[15px] text-[#464646] pb-[7px] pt-[20px]'>Query Type<sapn className="pl-[8px] text-green-500">*</sapn></label>
             <div className='flex space-x-3 pt-[6px]'>
               <div className='border border-gray-300 p-[10px_10px_10px_25px] w-72 rounded-md'>
                <input type="radio" name='radio'/><span className='pl-[14px] text-[#464646]'>General Enquiry</span>
               </div> 
              <div className='border border-gray-300 p-[10px_10px_10px_25px] w-72 rounded-md'>
                <input type="radio" name='radio'/><span className='pl-[14px] text-[#464646]'>Support Requrest</span>
               </div>
            </div>

               
            <label htmlFor="massage" className='text-[15px] text-[#464646] pb-[7px] pt-[20px]'>Massage<sapn className="pl-[8px] text-green-500">*</sapn></label>
            <textarea type="text" className='border border-gray-300 h-24 rounded-md'/>
           
           <div className='pb-[10px] pt-[38px]'>
            <label htmlFor=""></label>
            <input type="checkbox" /><span className='pl-5 text-[#464646] text-[14.4px] font-medium'>I consent to being contacted by the team*</span>
           </div>

          <div className='mt-[22px] bg-[#0c7d69] rounded-md'>
            <button type="submit" className='p-[16px_268px] text-white font-semibold'>Submit</button>
          </div>
            
          </form>
       </div>
    </div>
    </>
  )
}

export default App
