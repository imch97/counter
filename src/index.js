import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 class Schet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {kol: 0};
    
       
    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
 }

 plusClick(){
  this.setState({kol: this.state.kol + 1});
 }

 minusClick(){
  this.setState({kol: this.state.kol - 1}) 
 }

 render(){
   return(
     <div>
   <h1>{this.state.kol}</h1>
   <button onClick={this.plusClick}>+</button>
   <button onClick={this.minusClick}>-</button>
   </div>
   );
 }

}

ReactDOM.render(
  <Schet />,
  document.getElementById('root')
);


