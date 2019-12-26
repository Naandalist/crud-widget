import React, { Component } from "react";
import ModalEdit from "./ModalEdit";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Card extends Component {
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
        <div className='card card-square'>
          <p className='widget-title'> {this.props.name} </p>
          <p className='widget-price'> {this.props.price} </p>
          <p className='widget-desc'>{this.props.desc}</p>
          <div className='button-edit-del'>
            <button
              className='buton btn-white'
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Hapus
            </button>
            <button
              className='buton btn-ocean modal-trigger'
              href='#modal-edit'
              onClick={() => this.props.onEdit(this.props.slug, this.props.id)}
            >
              Edit
            </button>
          </div>
        </div>

        <ModalEdit
          index={this.props.index}
          datawillEdit={this.props.datawillEdit}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
      </>
    );
  }
}

export default Card;
