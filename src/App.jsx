import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Users from './components/Users/Users';
function App() {

  const [format, setFormat] = useState('list');

  const handleFormat = (value) => {
    setFormat(value);
  };

  return (
    <div className="App">
      <Header handleFormat={handleFormat} />
      <Users format={format}/>
    </div>
  );
}

export default App;
