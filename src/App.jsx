import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import User from './components/User/User'
import { dataUser } from './data/data'
function App() {

  const [format, setFormat] = useState('list');

  const handleFormat = (value) => {
    setFormat(value);
  };

  const users = `${format === 'list' ? 'list' : 'tile'} `;

  return (
    <div className="App">
      <Header handleFormat={handleFormat} />
      <div className={users}>
        {dataUser.map((user, index) => <User key={index} user={user} />)}
      </div>
    </div>
  )
}

export default App;
