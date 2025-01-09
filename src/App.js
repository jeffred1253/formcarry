import './App.css';
import Headersm from './Body/Header_sm';
import Headerlg from './Body/Header_lg';
import { useEffect, useState } from 'react';
import Main from './Body/Main_sm';

function App() {
  const [header, setHeader] = useState()
  
  // Fonction qui spécififie le format du header
  const resize = () => {
    if (window.outerWidth < 990) {
      setHeader('small')
    } else {
      setHeader('large')
    }
  }
  
  // Adapte le format du header à chaque modification de la taille de l'écran
  window.addEventListener('resize', resize)

  // Adapte le format du header au premier rendu par rapport à la taille de l'écran
  useEffect(() => resize, [])

  return (
    <div>
      {header === 'small' ? <Headersm/> : <Headerlg/>}
      <Main/>
    </div>
  );
}

export default App;
