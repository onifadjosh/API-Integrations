// import Fetch from './components/Fetch';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MonInt from './components/MonInt';
import Success from './components/Success';


function App() {
  return (
    <>
      
      <Router>
        

        <Routes>
          {/* <Fetch/> */}
          <Route exact path='/' Component={MonInt}/>
          {/* <MonInt></MonInt> */}

          <Route path='/Success' Component={Success}/>
          {/* <Success></Success> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
