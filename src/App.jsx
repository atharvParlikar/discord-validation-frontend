import {useState} from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = () => {
    // whatever you wanna do
    console.log(input);
  }

  return (
    <div>
      <div className='form'>
        <h1>100xdevs Discord Email verification</h1>
        <input type="text" onChange={handleChange} value={input} placeholder='Email' />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {/* for the key */}
        <p>{}</p>
      </div>
    </div>
  );
}

export default App
