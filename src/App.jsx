import './App.css'
import Confident from './Component/Confident'
import Elevate from './Component/Elevate'
import Financial from './Component/Financial'
import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import Next from './Component/Next'
import Last from './Component/Last'
function App() {


  return (
    <div className="font-sfProDisplay font-normal">
      <Navbar />
      <Intro/>
      <Elevate />
      <Financial />
      <Confident />
      <Next/>
      <Last />
      
    </div>
  )
}

export default App
