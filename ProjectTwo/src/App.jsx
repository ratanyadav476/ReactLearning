import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import reviews from './components/data'

function App() {
console.log(reviews);


  return (
    <>
<div>
  <Navbar/>
  <Cart reviews={reviews} />
</div>

    </>
  )
}

export default App
