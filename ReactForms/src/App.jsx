import React, { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ firsthname: "", lastname: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" })
  function changeHandle(event) {
    // console.log(formData.firsthname);
    // console.log(formData.lastname);
    // console.log(formData.email);
    // console.log(formData);

    setFormData(prevdata => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(w) {
    w.preventDefault()
    console.log(formData);

  }
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='enter your first name'
          onChange={changeHandle}
          name='firsthname'
          value={formData.firsthname}

        />
        <br />
        <br />
        <input type="text"
          placeholder='enter your last name'
          onChange={changeHandle}
          name='lastname'
          value={formData.lastname}

        />
        <br />
        <br />
        <input type="email"
          placeholder='enter your email'
          onChange={changeHandle}
          name='email'
          value={formData.email}

        />
        <br />
        <br />

        <textarea
          placeholder='enter your comments'
          onChange={changeHandle}
          name='comments'
          value={formData.comments}
        />
        <br />
        <br />
        <input

          type="checkbox"
          onChange={changeHandle}
          name='isVisible'
          // value={formData.isVisible}
          id='isVisible'
        />
        <label htmlFor="isVisible">Am I visible</label>

        <br />
        <br />
        <input type="radio"
          onChange={changeHandle}
          name='mode'
          id='online-mode'
          value="online-mode"
          checked={formData.mode === "online-mode"}
        />
        <label htmlFor="online-mode">Online-Mode</label>

        <input type="radio"
          onChange={changeHandle}
          name='mode'
          id='ofline-mode'
          value="ofline-mode"
          checked={formData.mode === "ofline-mode"}
        />
        <label htmlFor="ofline-mode">Ofline-Mode</label>
        <br />
        <br />
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandle}
        >
          <option value="Scarpio">Scarpio</option>
          <option value="LamboGini">LamboGini</option>
          <option value="Thar">Thar</option>
          <option value="Marcidies">Marcidies</option>
          <option value="suzki Dezire">Suzki Dezire</option>
        </select>
        <label htmlFor="favCar">Tell me Your Fav Car</label>

        <br />
        <br />
        <button>submit</button>
      </form>

      <h1 class="text-4xl font-bold bg-gradient-to-r from-rose-400 to-cyan-500 bg-clip-text text-transparent">
        Gradient Text
      </h1>


    </div>
  )
}

export default App