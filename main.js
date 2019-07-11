import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Roaster from './Roaster';
import Schedule from './Schedule';
import { BrowserRouter as Router } from 'react-router-dom'

function Main() {
  const extraProps = { color: 'red' }
  return (
    <main>
      <Switch>
        <Route exact path='/' render={()=>{
          return <Home/>
        }}/>
        <Route path='/roster' component={Roaster}/>
        <Route exact path='/schedule' render={() =>{
          return <Schedule data={extraProps}/>
        }}/>
      </Switch>
    </main>
  );
}

export default Main;