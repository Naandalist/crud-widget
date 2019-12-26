import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { postDataWidgets } from "../Configs";

import Modal from "./Modal";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      formWidgetPost: {
        widgetName: "",
        price: 0,
        description: ""
      }
    };
  }

  postDataWidget = () => {
    postDataWidgets(this.state.formWidgetPost).then(result => {
      if (result) {
        window.location.href = "/";
      }
    });
  };

  handleFormChange = event => {
    let formWidgetPostNew = { ...this.state.formWidgetPost };

    formWidgetPostNew[event.target.name] = event.target.value;
    this.setState({
      formWidgetPost: formWidgetPostNew
    });
  };

  handleSubmit = () => {
    console.log("Handle Submit: ", this.state.formWidgetPost);
    this.postDataWidget();
  };

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
          onChange={this.props.onChange}
          name={this.props.name}
          onSubmit={this.props.onSubmit}
          // price={this.state.formWidgetPost.price}
          // description={this.state.formWidgetPost.description}
        />
      </>
    );
  }
}

export default Navbar;
