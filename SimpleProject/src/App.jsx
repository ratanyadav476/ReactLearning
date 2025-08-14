
import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'



    // <div className='w-full h-screen flex flex-col background text-center mt-4'>
    //   <h1 className='bg-white rounded-sm'>Random GIF'S</h1>
    //   <div className='flex flex-col '>
    //     <Random />
    //     <Tag />

    //   </div>
    // </div>
    function App() {
      return (
        <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
          <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold ">
            Random Gifs
          </h1>
          <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
          <div className='flex justify-between gap-10 items-center'>  <Random />
            <Tag /></div>
          </div>
        </div>
      );
    }

export default App
