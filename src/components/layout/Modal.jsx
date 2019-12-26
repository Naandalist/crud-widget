import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <>
        <div id='modal-input' className='modal'>
          <div className='modal-content'>
            <h4>Tambah Widget</h4>

            <div className='row'>
              <form className='col s12' onChange={this.props.onChange}>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='widgetName'
                      name='widgetName'
                      type='text'
                      className='validate'
                    />
                    <label htmlFor='widgetName' value={this.props.name}>
                      Nama Widget
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <input
                      id='price'
                      name='price'
                      value={this.props.price}
                      type='number'
                      className='validate'
                    />
                    <label htmlFor='price'>Price</label>
                  </div>
                  <div className='input-field col s12'>
                    <input
                      id='description'
                      name='description'
                      value={this.props.description}
                      type='text'
                      className='validate'
                    />
                    <label htmlFor='description'>Description</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='modal-footer'>
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

export default Modal;
