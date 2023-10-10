import './App.css';
import React,{Component} from 'react'

class App extends Component {

  constructor()
  {
    super();
    this.state={
      data:"vaibhav"
    }

  }
  apple()
  {
    this.setState({data:"savani"})
  }

  render()
  {
    return (

     <div className='App'>
     <h1>{this.state.data}</h1>
     <button onClick={()=>this.apple()}>update</button>

     </div>

     );
     
  }

}

export default App;