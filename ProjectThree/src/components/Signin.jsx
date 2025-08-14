// import React, { useState } from 'react'
// import { PiFlowerLotusThin } from "react-icons/pi";
// function Signin() {
//     const [formData,setFormData]=useState({firsthName:"",lastName:"",email:"",password:"",confPass:""})
//     console.log(formData);
    
//    function changeHandler(event){
//     setFormData(prev=>{
//         return {...prev,[event.target.name]:event.target.value }
//     })
//    }
// function handleSubmit(e){
//     e.preventDefault()
//     console.log(formData);
    
// }

// function clickHandler(){
// setFormData("")
// }
//   return (
//     <div className=' w-full h-auto flex justify-around items-center] dark:bg-gray-800'>

//  <form  className=' flex justify-center items-center flex-col w-[500px] h-auto p-4 m-4 bg-sky-900 border rounded-4xl' onSubmit={handleSubmit}>
//      <div className=' w-[400px] items-center text-center p-1 m-2 bg-sky-900'>
//     <label className='font-serif text-xl' htmlFor="firsthName">Firsth Name</label>
//     <br />
//           <input 
//           className='p-3 w-[350px] outline rounded-3xl'
//           type="text"
//         placeholder='firsth Name '
//         onChange={changeHandler}
//         name='firsthName'
//         />
//   </div>
//   <div className=' w-[400px] items-center text-center p-1 m-2 bg-sky-900'>
//     <label  className='font-serif text-xl'  htmlFor="lastName">LastName</label>
//     <br />
//     <input type="text"
//     className='p-3 w-[350px] outline rounded-3xl'
//     placeholder='Last Name'
//     onChange={changeHandler}
//     name='lastName'
//     />

//   </div>
//   <br />
//   <div className=' w-[400px] items-center text-center p-1 m-2 bg-sky-900'>
//     <label  className='font-serif text-xl'  htmlFor="email">E-mail</label>
//     <br />
//     <input type="email"
//     className='p-3 w-[350px] outline rounded-3xl'
//     placeholder='enter your email'
//     onChange={changeHandler}
//     name='email'

//     />
//   </div>
//   <br />
//   <div className=' w-[400px] items-center text-center p-1 m-2 bg-sky-900'>
//     <label  className='font-serif text-xl'  htmlFor="password">Password</label>
//     <br />
//     <input type="password"
//     className='p-3 w-[350px] outline rounded-3xl'
//     onChange={changeHandler}
//     name='password'
//     placeholder='Pass@1234%^&$'
//     />
//   </div>
//   <br />
//   <div className=' w-[400px] items-center text-center p-1 m-2 bg-sky-900'>
//     <label className='font-serif text-xl'  htmlFor="confPass">Confirm Password</label>
//     <div>
//         <input type="password"
//         className='p-3 w-[350px] outline rounded-3xl'
//         onChange={changeHandler}
//         name='confPass'
//         placeholder='Pass@1234%^&$'
//         />
//     </div>
//   </div>
//   <button className='bg-gray-700 p-3 w-[100px] outline rounded-3xl font-semibold'>Submit</button>
//  </form>

//  <div className='bg-rose-500 w-[500px] h-auto m-4 border rounded-4xl'>
//     <div className='relative'>
//         <PiFlowerLotusThin  className='w-[120px] h-[140px] absolute left-43' />
//     </div>
//   <div className= 'absolute top-50 right-80 '>
//       <p className='w-full p-3 m-2 font-bold text-xl'>Your Name is <span className='text-sky-950'>,{formData.firsthName} {formData.lastName}</span></p>
//     <h2 className='w-full p-2 m-2 text-xl font-semibold'>Your email __ <span className='text-black'>"{formData.email}"</span></h2>
//     <h2 className='w-full p-2 m-2 text-xl font-semibold ' > Your Password is ,<span className='text-teal-900'>{ formData.password==formData.confPass?formData.password:"password not match"}</span></h2>
//     <button  onClick={clickHandler} className='p-4 m-4 font-semibold text-2xl bg-gray-700 border rounded-3xl'>Confirm Credientials</button>
//   </div>
//  </div>
//     </div>
//   )
// }

// export default Signin



////////////////////////////////


import React, { useState } from 'react'
import { PiFlowerLotusThin } from "react-icons/pi";

function Signin() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", confPass: ""
  });

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function clickHandler() {
    setFormData({
      firstName: "", lastName: "", email: "", password: "", confPass: ""
    });
  }

  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-around p-6 bg-gray-100 dark:bg-gray-800'>
      
      {/* Form Section */}
      <form onSubmit={handleSubmit} className='w-full max-w-md p-6 m-4 bg-cyan-800 font-bold text-white rounded-3xl shadow-lg'>
        <h2 className='text-center text-2xl font-bold mb-4'>Sign In</h2>

        <div className='mb-4 text-left'>
          <label htmlFor="firstName" className='block mb-1'>First Name</label>
          <input
            type="text"
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={changeHandler}
            className='w-full  p-3 rounded-xl outline-none text-black'
          />
        </div>

        <div className='mb-4 text-left'>
          <label htmlFor="lastName" className='block mb-1'>Last Name</label>
          <input
            type="text"
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={changeHandler}
            className='w-full p-3 rounded-xl outline-none text-black'
          />
        </div>

        <div className='mb-4 text-left'>
          <label htmlFor="email" className='block mb-1'>Email</label>
          <input
            type="email"
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={changeHandler}
            className='w-full p-3 rounded-xl outline-none text-black'
          />
        </div>

        <div className='mb-4 text-left'>
          <label htmlFor="password" className='block mb-1'>Password</label>
          <input
            type="password"
            name='password'
            placeholder='Pass@1234%^&$'
            value={formData.password}
            onChange={changeHandler}
            className='w-full p-3 rounded-xl outline-none text-black'
          />
        </div>

        <div className='mb-6 text-left'>
          <label htmlFor="confPass" className='block mb-1'>Confirm Password</label>
          <input
            type="password"
            name='confPass'
            placeholder='Confirm Password'
            value={formData.confPass}
            onChange={changeHandler}
            className='w-full p-3 rounded-xl outline-none text-black'
          />
        </div>

        <button type='submit' className='w-[200px] bg-gray-700 p-3 rounded-xl font-semibold hover:bg-gray-600'>Submit</button>
      </form>

      {/* Output Section */}
      <div className='w-full h-full max-w-md bg-rose-500 text-white p-6 m-4 rounded-3xl shadow-lg relative'>
        <div className='flex justify-center mb-4'>
          <PiFlowerLotusThin className='w-[80px] h-[80px]' />
        </div>

        <p className='text-lg mb-2'>
          Your Name is <span className='text-sky-950 font-bold'>{formData.firstName} {formData.lastName}</span>
        </p>

        <h2 className='text-lg mb-2'>
          Your Email is <span className='text-black font-semibold'>" {formData.email} "</span>
        </h2>

        <h2 className='text-lg mb-4'>
          Your Password is <span className='text-teal-900 font-semibold'>
            {formData.password === formData.confPass ? formData.password : "Passwords do not match"}
          </span>
        </h2>

        <button onClick={clickHandler} className='w-auto bg-gray-700 p-3 rounded-xl font-semibold hover:bg-gray-600'>
          Confirm Credentials
        </button>
      </div>
    </div>
  )
}

export default Signin;
