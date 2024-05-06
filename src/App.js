import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Text from './text';


// mounting
// updating
// unmounting




function App() {

    const [showText , setShowText] = useState(false);


  return (
    <div className="App">

      <button onClick={()=> setShowText(!showText)}>Show Text</button>  
      <Text />



    
    </div>
  );
}

export default App;
