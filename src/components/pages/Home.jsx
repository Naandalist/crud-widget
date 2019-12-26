import React, { Component } from "react";
import swal from "sweetalert";
import Card from "../layout/Card";
import Headdesc from "../layout/Headdesc";
import NavbarContent from "../layout/NavbarContent";
import Spinner from "../layout/Spinner";

import {
  getDataWidgets,
  postDataWidgets,
  deleteDataWidgets,
  editDataWidgets,
  getSelectedWidgets
} from "../Configs";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataWidgets: [],
      post: [],
      formWidgetPost: {
        widgetName: "",
        price: "",
        description: ""
      },
      formWidgetEdit: {
        name: "",
        price: "",
        description: ""
      },
      widgetWillEdit: [],
      idWillEdit: ""
    };
  }

  editDataWidget = (slug, id) => {
    getSelectedWidgets(slug).then(result => {
      if (result) {
        this.setState({
          widgetWillEdit: result,
          idWillEdit: id
        });
      }
    });
  };

  deleteDataWidget = id => {
    swal({
      text: "Apakah kamu yakin perlu menghapus ini?",
      buttons: true,
      dangerMode: true
    }).then(status => {
      if (status) {
        swal("Mohon tunggu sebentar...", {
          icon: false,
          buttons: false,
          timer: 1000
        });
        setTimeout(() => {
          deleteDataWidgets(id).then(result => {
            if (result) {
              getDataWidgets().then(result => {
                if (result) {
                  swal("Terimakasih", {
                    icon: "success",
                    title: "widget telah dihapus!",
                    timer: 3000,
                    buttons: false
                  });
                  this.setState({
                    dataWidgets: result
                  });
                }
              });
            }
          });
        }, 1000);
      } else {
        swal("Terimakasih", {
          icon: "success",
          title: "Data tidak terhapus!",
          timer: 3000,
          buttons: false
        });
      }
    });
  };

  postDataWidget = () => {
    swal("Mohon tunggu sebentar...", {
      icon: false,
      buttons: false,
      timer: 1000
    });
    postDataWidgets(this.state.formWidgetPost).then(result => {
      if (result) {
        getDataWidgets().then(result => {
          if (result) {
            swal({
              icon: "success",
              title: "data widget berhasil ditambahkan!",
              timer: 3000
            });
            this.setState({
              dataWidgets: result
            });
          }
        });
      }
    });
  };
  handleFormChangeEdit = event => {
    let formWidgetEditNew = { ...this.state.formWidgetEdit };
    formWidgetEditNew[event.target.name] = event.target.value;
    this.setState({
      formWidgetEdit: formWidgetEditNew
    });
  };

  handleFormChange = event => {
    let formWidgetPostNew = { ...this.state.formWidgetPost };

    formWidgetPostNew[event.target.name] = event.target.value;
    this.setState({
      formWidgetPost: formWidgetPostNew
    });
  };

  handleSubmitEdit = () => {
    if (
      this.state.formWidgetEdit.name.length < 1 ||
      this.state.formWidgetEdit.price.length < 1 ||
      this.state.formWidgetEdit.description.length < 1
    ) {
      return swal({
        icon: "info",
        title: "data tidak boleh ada yang kosong!",
        timer: 3000
      });
    }
    editDataWidgets(this.state.formWidgetEdit, this.state.idWillEdit).then(
      result => {
        if (result) {
          getDataWidgets().then(result => {
            if (result) {
              swal({
                icon: "success",
                title: "data widget berhasil diubah!",
                timer: 3000
              });
              this.setState({
                dataWidgets: result
              });
            }
          });
        }
      }
    );
  };

  handleSubmit = () => {
    if (
      this.state.formWidgetPost.widgetName.length < 1 ||
      this.state.formWidgetPost.price.length < 1 ||
      this.state.formWidgetPost.description.length < 1
    ) {
      return swal({
        icon: "info",
        title: "data tidak boleh kosong!",
        timer: 3000
      });
    }
    this.postDataWidget();
    this.setState({
      formWidgetPost: {
        widgetName: "",
        price: "",
        description: ""
      }
    });
  };

  componentDidMount() {
    getDataWidgets().then(result => {
      if (result) {
        this.setState({
          dataWidgets: result
        });
      }
    });
  }

  render() {
    return (
      <>
        <NavbarContent
          onChange={this.handleFormChange}
          name={this.state.formWidgetPost.widgetName}
          onSubmit={this.handleSubmit}
        />
        <div className='container-App'>
          <Headdesc />
          {this.state.dataWidgets.length < 1 ? (
            <Spinner />
          ) : (
            this.state.dataWidgets.map((widget, index) => {
              return (
                <Card
                  index={index}
                  key={widget.id}
                  id={widget.id}
                  slug={widget.slug}
                  name={widget.name}
                  price={widget.price}
                  desc={widget.description}
                  onEdit={this.editDataWidget}
                  onDelete={this.deleteDataWidget}
                  datawillEdit={this.state.widgetWillEdit}
                  onChange={this.handleFormChangeEdit}
                  onSubmit={this.handleSubmitEdit}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
}

export default Home;
