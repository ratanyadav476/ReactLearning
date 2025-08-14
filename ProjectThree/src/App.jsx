import { useState } from 'react'
import './App.css'
import Signin from './components/Signin'

function App() {
  // const [formData, setFormData] = useState({ firsthName: "", lastName: "", email: "", password: "", confirmPassword: "" })
  // function clickHandler(event) {
  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value
  //     }
  //   })

  // }

  // function submitHandler(e) {
  //   e.preventDefault()
  //   console.log(formData);

  // }

  return (
    <>
    <Signin/>
      {/* <form onSubmit={submitHandler}>
        <input type="text"
          placeholder='enter firsth name'
          onChange={clickHandler}
          name='firsthName'
          value={formData.firsthName}
        />
        <br />
        <br />
        <input type="text"
          placeholder='enter last name'
          onChange={clickHandler}
          name='lastName'
          value={formData.lastName}
        />
        <br />
        <br />
        <input type="email"
          placeholder='enter your email '
          onChange={clickHandler}
          name='email'
          value={formData.email}
        />
        <br />
        <br />
        <input type="password"
          value={formData.password}
          name='password'
          onChange={clickHandler}
          placeholder='enter password'

        />
        <br />
        <br />
        <input type="password"
          value={formData.confirmPassword}
          name='confirmPassword'
          onChange={clickHandler}
          placeholder='confirm password'

        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <div>welcome {formData.firsthName}</div>
      <h1>your password is {formData.password}</h1>
      <h2>your email is ,{formData.email}</h2> */}
    </>
  )
}

export default App
