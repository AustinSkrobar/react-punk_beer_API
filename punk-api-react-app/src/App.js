import React, { Component } from 'react'
import Beer from "./components/Beer";
import './App.css';

/** function App(props) {
 *    const [beers, setBeer] = useState(null)
 * 
 * componentDidMount() {
      console.log('Mounted')
      fetch('https://api.punkapi.com/v2/beers')
      .then ((res) => res.json())
      .then((data) => {
        setBeer({ beers: data})
      })
    }

 * }
*/
class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        beers: null,
      }
    }

    componentDidMount() {
      console.log('Mounted')
      fetch('https://api.punkapi.com/v2/beers')
      .then ((res) => res.json())
      .then((data) => {
        this.setState({ beers: data})
      })
    }

    
  
  render() { 
    return (
      <div className="App">
        <ul className="list">{this.state.beers && this.state.beers.map((beer) => {
          return <Beer name={beer.name} tagline={beer.tagline} tips={beer.brewers_tips} image={beer.image_url} />
        })}</ul>
      </div>
    );
  }
}

export default App;
