import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './component/navegacion/Navbar'
import Inicio from './component/paginas/Inicio'
import Secciones from './component/paginas/Secciones'
import Acerca from './component/paginas/Acerca'


function App() {


  return (
    <div>
      <router>
        <Navbar/>
      </router>
    </div>
  );
}

export default App 