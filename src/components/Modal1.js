import React, { Component } from "react";
import logo from "./logo.svg";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Card from "material-ui/Card";
import "./Modal1.css";
import Data from "./Data";
import { Timeline, Collapse, Icon } from "antd";

import { db } from "./config";
import { white } from "material-ui/styles/colors";

const Panel = Collapse.Panel;

export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
    data: [],
    codes: [],
    done: false
  };

  componentDidMount() {
    var that = this;
    var list = [];
    db.ref("data").on("value", function(data) {
      list = [];
      data.forEach(function(a) {
        //  console.log("aa",a.val());
        list.push(a.val());
      });
      that.setState({ data: list.reverse(), done: true });
      console.log("log", that.state.data);
    });
    this.getItems();
  }

  getItems = () => {
    var codes = [];
    var that = this;
    db.ref("items").on("value", function(data) {
      codes = [];
      data.forEach(function(a) {
        codes.push(a.val());
      });
      that.setState({ codes });
    });
    console.log("codes", codes);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const list = this.state.data;
    const items = [];
    const codes = this.state.codes;
    if (this.state.done) {
    }
    for (var i = 0; i < list.length; i++) {
      items.push(
        <Panel
          header={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10
              }}
            >
              <Icon type="environment" style={{ fontSize: 15 }}>
                {list[i].from}
              </Icon>
              <div>
                <h2>{list[i].item}</h2>
              </div>
              <Icon type="environment" style={{ fontSize: 15 }}>
                {" "}
                {list[i].to}{" "}
              </Icon>
            </div>
          }
          key={i}
        >
          <Timeline>
            {codes.map(item => {
              return item.itc === list[i].itemcode ? (
                <Timeline.Item>
                  <div
                    className="paper"
                    style={{
                      minWidth: 90,
                      minHeight: 60,
                      padding: 10
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <h3 style={{ color: white }}>CheckPoint:</h3> {item.loc}
                      </div>
                      <div>
                        <h3 style={{ color: white }}>Qty:</h3> {item.qty}
                      </div>
                      <div>
                        <h3 style={{ color: white }}>Date:</h3> {item.dat}
                      </div>
                    </div>
                  </div>
                </Timeline.Item>
              ) : null;
            })}
          </Timeline>
        </Panel>
      );
    }

    return (
      <div className="button">
        <div style={{ color: "white", fontSize: 22 }}>Recents :</div>
        <Collapse accordion>{items}</Collapse>
      </div>
    );
  }
}
