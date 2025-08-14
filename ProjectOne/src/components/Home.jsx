
import image0 from "../images/image0.jpg"
import About from "./About"
import Services from './Services';
function Home() {
  return (
    < div className='sm:w-full md:w-full   flex flex-wrap justify-between items-center'>

      <div className='sm:w-[100px]  md:w-full  lg:w-full h-[500px]'>
        <img src={image0} alt="" className='w-full h-full animate-pulse rounded-4xl' />
      </div>
      <div className="w-full m-10 h-[4px] rounded bg-gradient-to-r from-yellow-400 to-purple-600 
              shadow-[0_60px_120px_rgba(255,215,0,0.3),0_80px_160px_rgba(138,43,226,0.3)]">
      </div>
      <div className='flex mx-auto flex-col '>
        <About />
        <div className="w-full m-10 h-[4px] rounded bg-gradient-to-r from-yellow-400 to-purple-600 
              shadow-[0_60px_120px_rgba(255,215,0,0.3),0_80px_160px_rgba(138,43,226,0.3)]">
        </div>
        <h3 className='font-semibold text-violet-600 text-4xl'>Our Services</h3>
        <Services />
      </div>

    </div>


  );
}

export default Home

