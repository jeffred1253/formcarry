import './App.css';
import Headersm from './Body/Header_sm';
import Headerlg from './Body/Header_lg';
import { useEffect, useState } from 'react';
import Main from './Body/Main_sm';

function App() {
  const [header, setHeader] = useState()
  
  const resize = () => {
    if (window.outerWidth < 990) {
      setHeader('small')
    } else {
      setHeader('large')
    }
  }
  
  window.addEventListener('resize', () => {
    resize()
  })

  useEffect(() => resize, [])

  return (
    <div>
      {header === 'small' ? <Headersm/> : <Headerlg/>}
      <Main/>
    </div>
  );
}

export default App;
