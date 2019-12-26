import React, { Component } from "react";
//import Axios from "axios";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { postDataWidgets } from "../Configs";

import Modal from "./Modal";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        <div className='navbar-app bg-white'>
          <p className='title-nav'>CRUD Widget</p>
          <ul>
            <li>
              <button
                className='buton btn-ocean modal-trigger'
                href='#modal-input'
              >
                <i className='fa fa-plus' /> Tambah Widget
              </button>
            </li>
          </ul>
        </div>
        <Modal
          onChange={this.handleFormChange}
          name={this.state.formWidgetPost.widgetName}
          onSubmit={this.handleSubmit}
          // price={this.state.formWidgetPost.price}
          // description={this.state.formWidgetPost.description}
        />
      </>
    );
  }
}

export default Navbar;
