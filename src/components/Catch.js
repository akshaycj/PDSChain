import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {db} from './config'

class Catch extends Component{
    state = {
        open: false,
        loc:'',
        dat:'',
        tim:'',
        qty:'',
        itc:'',
      };

      handleOpen = () => {
        this.setState({open: true});
      };

      handleClose = () => {
        this.setState({open: false});
      };
      onLocation=(e,s)=>{
        this.setState({loc: s});
      }
      onDate=(e,s)=>{
        this.setState({dat: s});
      }
      onTime=(e,s)=>{
        this.setState({tim: s});
      }
      onItemCode=(e,s)=>{
        this.setState({itc: s});
      }
      onQty=(e,s)=>{
        this.setState({
          qty:s
        })
      }
      onSubmit =( ) =>{
        var data = {
          loc:this.state.loc,
          qty:this.state.qty,
          dat:this.state.dat,
          tim:this.state.tim,
          itc:this.state.itc
        }
        db.ref('items').push(data)

        this.setState({open: false});
      }


      render(){
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.onSubmit}
            />,
          ];
        return(
            <div>
                <RaisedButton label="Check In" secondary={true} style={{margin:'15px'}} onClick={this.handleOpen} />
        <Dialog
          title="CHECK IN"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <text>LOCATION:  </text>
          <TextField hintText="Node Loc" onChange={this.onLocation}/>
          <br/>
          <text>DATE:  </text>
          <TextField hintText="At the time of arrival" onChange={this.onDate} />
          <br/>
          <text>TIME:  </text>
          <TextField hintText="At the time of arrival"  onChange={this.onTime}/>
          <br/>

            <text>QTY:  </text>
            <TextField hintText="Quantity"  onChange={this.onQty}/>
            <br />
          <text>ITEM CODE:  </text>
          <TextField hintText="Item code"  onChange={this.onItemCode}/>


        </Dialog>
            </div>
        )
      }



}
export default Catch
