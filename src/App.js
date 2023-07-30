import React from "react";
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import {Home} from "./components/Home";
import {Cars} from "./components/Cars";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {name: 'Ford', year: '2015'},
        {name: 'BMW', year: '2018'},
        {name: 'KIA', year: '2013'},
        {name: 'Mazda', year: '2010'},
        {name: 'Mercedes', year: '2016'},
      ],
      cars2: [
        {name: 'Vesta', year: '2015'},
        {name: 'Grant', year: '2018'},
        {name: 'Niva', year: '2013'},
        {name: 'VAZ', year: '2010'},
        {name: 'Moscvich', year: '2016'},
      ]
    }
  }

  render() {
    return (
      <div className='app'>
        <nav style={{textAlign: 'center'}}>
          <ul style={{listStyle: 'none'}}>
            <li style={{display: 'inline-block', marginRight: '10px'}}><NavLink to='/'>Home</NavLink></li>
            <li style={{display: 'inline-block', marginRight: '10px'}}><NavLink to='/cars'>Cars</NavLink></li>
            <li style={{display: 'inline-block', marginRight: '10px'}}><NavLink to='/cars2'>Cars 2</NavLink></li>
          </ul>
          <hr/>
        </nav>

        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/cars' render={() => <Cars cars={this.state.cars}/>}/>
            <Route path='/cars2'>
              <Cars cars={this.state.cars2}/>
            </Route>
          </Switch>
        </div>

      </div>
    )
  }
}

export default App;
