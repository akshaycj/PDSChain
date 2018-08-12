import React, { Component } from 'react';
import logo from './logo.svg';
//import './Card1.css';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';




class Card1 extends Component {


render(){
  return(
    <div className='button'>

          <Card>
            <FlatButton label="Delhi-Kochi" fullWidth={true} />
          </Card >
              <br/>
              <br/>
          <Card>
            <FlatButton label="Chennai-Kolkata" fullWidth={true} />
          </Card>
              <br/>
              <br/>
          <Card>
            <FlatButton label="Jaipur-Bhopal" fullWidth={true} />
          </Card>



    </div>
  );
}
}




//export default Card1;
