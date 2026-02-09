


import Footer from '../components/footer';

function Apply(){
    return(
        <div>
        <div className='w-full flex justify-center items-center h-[500px] sm:mt-20 md:mt-14 lg:mt-14 xl:mt-14'>
            <div className='flex flex-col justify-start items-center bg-white sm:w-[80%] md:w-[70%] lg:w-[35%] xl:w-35% 2xl:w-[35%] sm:h-[80%] md:h-[70%] lg:h-[70%] shadow-2xl shadow-black'>
                <h1 className='text-center text-2xl  p-5 text-[#044e83] font-bold'>Grand Entrance Exam Result</h1>
       
       <div className=' w-[90%] my-6'>
       <h2>Registration Number *</h2>
       <input className='w-full p-2 rounded-md bg-slate-100  border border-gray-200' type="number" placeholder='Registration Number' required/>
       </div>
       
       <div className=' w-[90%]'>
       <h2>CNIC or B-Form Number *</h2>
       <input className='w-full p-2 rounded-md bg-slate-100  border border-gray-200' type="number" placeholder='CNIC or B-Form Number ' required />
       </div>
      
   <input type='submit' className="w-[150px] cursor-pointer text-white p-2  text-xl rounded-sm sm:mt-5 md:mt-5 lg:mt-10 bg-[#044e83] transition duration-200 ease-out hover:scale-105 hover:ease-in " value="GET RESULT" />

            </div>
        </div>
        <Footer/>
        </div>

    )
}
export default Apply