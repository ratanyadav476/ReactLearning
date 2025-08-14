import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [formData, setFormData] = useState({ firsthName: "", lastName: "", email: "", country: "", strAddress: "", city: "", state: "", pscode: "", isVisible: "", isVisibleTwo: "", isVisibleThree: "", mode: "" })
  function inputHandler(event) {

    const { value, name, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })


  }

  function submitHandler(e) {
    e.preventDefault()
    console.log("input data are these .............");
    console.log(formData);


  }
  return (
    <>
      <div className='p-4  w-[1200px] h-[1200px] flex  m-4  bg-white'>
        <form onSubmit={submitHandler}>
          {/* firsth name  */}
          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="firsthName">Firsth Name</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your firsth name'
              name="firsthName"
              id="firsthName"
              value={formData.firsthName}
            />
          </div>
          {/* last name  */}
          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="LastName">Last Name</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your last name'
              name="lastName"
              id="lastName"
              value={formData.lastName}
            />

          </div>

          {/* email address  */}
          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="email">Email Address</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="email"
              onChange={inputHandler}
              placeholder='enter email address'
              name="email"
              id="email"
              value={formData.email}
            />

          </div>
          {/* country  */}
          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="country">Country</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your country name'
              name="country"
              id="country"
              value={formData.country}
            />
          </div>

          {/* street address  */}
          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="strAddress">Street Address</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your street address name'
              name="strAddress"
              id="strAddress"
              value={formData.strAddress}
            />
          </div>
          {/* city  */}

          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="city">City</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your City name'
              name="city"
              id="city"
              value={formData.city}
            />
          </div>

          {/* state /Province  */}
          <div className='flex flex-col p-2 m-4 text-black  '>
            <label htmlFor="state"> State /Province</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your State /Province name'
              name="state"
              id="state"
              value={formData.state}
            />

          </div>
          {/* ZIP /Postal code */}
          <div className=' flex flex-col p-2 m-4 text-black'>
            <label htmlFor="pscode"> ZIP /Postal Code</label>
            <input
              className='w-[1000px] h-[40px] bg-gray-300 border rounded'
              type="text"
              onChange={inputHandler}
              placeholder='enter your ZIP /Postal Code name'
              name="pscode"
              id="pscode"
              value={formData.pscode}
            />

          </div>
          <h1 className='font-bold ml-4'>By Email</h1>
          {/* firsth check box  */}
          <div className='flex p-2 m-4 text-black'>
            <input className=''
              type="checkbox"
              onChange={inputHandler}
              name='isVisible'
              id='isVisible'
              checked={formData.isVisible}

            />

            <div className='flex flex-col p-2 m-4'>
              <label htmlFor="isVisible">Comments</label>
              <label className='text-gray-500' htmlFor="isVisible">Get notification when someones posts a comments on a posting</label>
            </div>

          </div>

          {/* second check box  */}
          <div className='flex p-2 m-4 text-black'>
            <input className=''
              type="checkbox"
              onChange={inputHandler}
              name='isVisibleTwo'
              id='isVisibleTwo'
              checked={formData.isVisibleTwo}
            />
            <div className='flex flex-col p-2 m-4'>
              <label htmlFor="isVisibleTwo">Candidates</label>
              <label className='text-gray-500' htmlFor="isVisibleTwo">Get notified when a candidate apply for a job</label>
            </div>

          </div>
          {/* third check box  */}
          <div className='flex p-2 m-4 text-black'>
            <input className=''
              type="checkbox"
              onChange={inputHandler}
              name='isVisibleThree'
              id='isVisibleThree'
              checked={formData.isVisibleThree}
            />
            <div className='flex flex-col p-2 m-4'>
              <label htmlFor="isVisibleThree">Offers</label>
              <label className='text-gray-500' htmlFor="isVisibleThree">Get notified when a candidate reject and accept an offer</label>
            </div>

          </div>
          <div className='flex flex-col m-2 p-2'>
            <p className='font-bold ml-6'>Push Notifation </p>
            <p>These are delevered via sms on your mobiel phone </p>

            
          </div>


          <div className='flex flex-col items-start'>

            {/* firsth radio  */}
            <div className='flex flex-row justify-center items-center p-2'>
              <input type="radio"
                className='ml-8 border-white  bg-gray-500 text-white'
                onChange={inputHandler}
                name="mode"
                value="Online-Mode"
                id='Online-Mode'
                checked={formData.mode == "Online-Mode"}
              />
              <label className='pl-6' htmlFor="Online-Mode">Everything</label>

            </div>


            {/* second radio  */}
            <div className='flex flex-row justify-center items-center p-2'>
              <input type="radio"
                className='ml-8 border-white  bg-gray-500 text-white'
                onChange={inputHandler}
                name="mode"
                value="Offline-Mode"
                id='Offline-Mode'
                checked={formData.mode == "Offline-Mode"}
              />
              <label className='pl-6' htmlFor="Offline-Mode">Same as email </label>

            </div>

            {/* third radio  */}
            <div className='flex flex-row justify-center items-center p-2'>
              <input type="radio"
                className='ml-8 border-white  bg-gray-500 text-white'
                onChange={inputHandler}
                name="mode"
                value="Live-Mode"
                id='Live-Mode'
                checked={formData.mode == "Live-Mode"}
              />
              <label className='pl-6' htmlFor="Live-Mode">No push notification </label>

            </div>
          </div>

          <button className='bg-violet-400 p-2 m-8 border border-black/12 rounded text-white' >Submit</button>

        </form>





      </div>
    </>
  )
}

export default App
