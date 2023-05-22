import './App.css';
import { useState } from 'react';
import data from "./data"
import Tours from './components/Tours';
function App() {

  const [tours, setTours] = useState(data)

function removeTour(id) {

  const newTours = tours.filter(tour => tour.id !==id);
  setTours(newTours);

}

if (tours.length === 0) {
  return (
    <div>
     <a href="/">  <h2 className='text-purple-400 font-medium text-center bg-black p-4'>Lets Roam</h2></a> 

      <h2 className='m-10 bg-slate-200 p-4'>
        No Tour Left 
      </h2>
      <button className='m-10' onClick={() => setTours(data)}> Refresh</button>

    </div>
  )
}
  return (
    <div className="">

<Tours tours = {tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
