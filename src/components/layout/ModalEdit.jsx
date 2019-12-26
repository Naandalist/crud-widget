import React, { Component } from "react";

class ModalEdit extends Component {
  render() {
    return (
      <>
        <div id='modal-edit' className='modal'>
          <div className='modal-content'>
            <h4>Edit Widget</h4>

            <div className='row'>
              <form className='col s12' onChange={this.props.onChange}>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id={`${this.props.index}-editedName`}
                      name='name'
                      type='text'
                      className='validate'
                      placeholder={this.props.datawillEdit.name}
                    />
                    <p style={{ fontSize: 12, fontStyle: "italic" }}>
                      Nama Widget
                    </p>
                  </div>
                  <div className='input-field col s12'>
                    <input
                      id={`${this.props.index}-editedPrice`}
                      name='price'
                      placeholder={this.props.datawillEdit.price}
                      type='number'
                      className='validate'
                    />
                    <p style={{ fontSize: 12, fontStyle: "italic" }}>Price</p>
                  </div>
                  <div className='input-field col s12'>
                    <input
                      id={`${this.props.index}-editedDesc`}
                      name='description'
                      placeholder={this.props.datawillEdit.description}
                      type='text'
                      className='validate'
                    />
                    <p style={{ fontSize: 12, fontStyle: "italic" }}>
                      Description
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='modal-footer' style={{ marginTop: -30 }}>
            <button
              className='buton btn-ocean modal-close'
              onClick={this.props.onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ModalEdit;
