import { useState } from 'react'
import './App.css'
import data from './componants/data'
import Tours from './componants/Tours'

function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length===0) {
    return (
      <div className="refresh">
        <h2>NO SWE,s Left</h2>
        <button className='btn-white' onChange={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App
