import './App.css';
import Temp from './components/Temp'
import Form from './components/Form';
import Button from './components/Button';
import { Route, useHistory, Switch } from "react-router-dom";



function App() {
  const history = useHistory()
  const goback =()=> {
      history.goBack()
  }
  const gofoward =()=> {
      history.push('/form')
  }
    // Creates a switch div for the application.
  return (
    <Switch>
    <div className="App">
      <header className="App-header">
  
        <Route exact path='/'>
        <Button onClick= {goback}className={'goBack'} name="BACK"/>
        <Temp />
        <Button onClick= {gofoward }className={'goForward'} name="NEXT" />
        </Route>
        <Route path='/form'>
          <Button onClick= {goback}className={'goBack'} name="BACK"/>
          <Form />
          <Button onClick= {gofoward }className={'goForward'} name="NEXT" />
        </Route>
      </header>


    </div>
    </Switch>
  );
}

export default App;
