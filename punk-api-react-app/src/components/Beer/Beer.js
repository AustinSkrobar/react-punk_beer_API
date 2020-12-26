import React, { Component } from 'react'
import './Beer.css'

class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {isToggleOn: true}
        this.state = {
            black: true
         }
        this.changeColor = this.changeColor.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor(){
        this.setState({black: !this.state.black})
        console.log(this.state);
     }
 
        
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
        console.log(this.state);
    }

    render() {
        let btn__class = this.state.black ? "blackButton" : "whiteButton";

        return (
            
            <div className="list__item">
              <h1 className="list__header">{this.props.name}</h1>
              <img src={this.props.image} alt='' className='beer__img' />              
              <span className="beer__tagline">{this.props.tagline}</span>
              <p className="beer__desc">{this.props.tips}</p>
              <button className={btn__class} onClick={this.changeColor}>Enjoyed</button>
            </div>
        )
    }
}

export default Beer