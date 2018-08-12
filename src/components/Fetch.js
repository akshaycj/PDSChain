import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { db } from "./config.js";

class Fetch extends Component {
  state = {
    open: false,
    from: "",
    to: "",
    qty: "",
    item: "",
    itemcode: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = () => {
    var data = {
      from: this.state.from,
      to: this.state.to,
      qty: this.state.qty,
      item: this.state.item,
      itemcode: this.state.itemcode
    };
    console.log(data);
    db.ref("data").push(data);
    this.setState({ open: false });
  };

  onFrom = (e, s) => {
    this.setState({ from: s });
  };
  onTo = (e, s) => {
    this.setState({ to: s });
  };
  onQty = (e, s) => {
    this.setState({ qty: s });
  };
  onItem = (e, s) => {
    this.setState({ item: s });
  };
  onItemCode = (e, s) => {
    this.setState({ itemcode: s });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Submit" primary={true} onClick={this.onSubmit} />
    ];
    return (
      <div>
        <RaisedButton
          label="Dispatch"
          secondary={true}
          style={{ margin: "15px" }}
          onClick={this.handleOpen}
        />
        <Dialog
          title="DISPATCH"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={{ fontWeight: "bold" }}
        >
          <text>From: </text>
          <TextField hintText="Previous Node" onChange={this.onFrom} />
          <br />
          <text>To: </text>
          <TextField hintText="Next Node" onChange={this.onTo} />
          <br />
          <text>Item: </text>
          <TextField hintText="Rice/Wheat" onChange={this.onItem} />
          <br />
          <text>Item Code: </text>
          <TextField hintText="As Mentioned" onChange={this.onItemCode} />
          <br />
          <text>Quantity: </text>
          <TextField hintText=" in Tonnes" onChange={this.onQty} />
        </Dialog>
      </div>
    );
  }
}
export default Fetch;
