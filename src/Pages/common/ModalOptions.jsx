import React from "react";
import CommonModal from "../../components/CommonModal";
import { connect } from "react-redux";
import { selectData, toggle } from "../../store/ModalData";
import { ConfirmAlert } from "./ConfirmAlert"

const Modal = ({ modalData, toggle }) => {
  const { Component } = modalData;

  return (
    <CommonModal
      title={modalData.title}
      data={modalData.data}
      openModal={modalData.openModal}
      component={Component}
      toggle={toggle}
      buttonLabel="Save Warehouse"
    />
  );
};

const mapStateToProps = (state) => ({
  modalData: selectData(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (data) => dispatch(toggle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

export const initialState = {
  openModal: false,
  data: {},
  title: "",
  Component: <React.Fragment />,
  options: {},
  loader: false
}

export const _toggle = (prop, dispatch) => {
  if (prop === "CLOSE") {
    dispatch({ type: "CLOSE" })
    return null
  }

  const { type, title, data, Component, deleteOptions, options, loader, submit } = prop

  switch (type) {
    case "OPEN": {
      dispatch({ type: "OPEN", data, title, loader, Component: <Component /> })
      break
    }

    case "VIEW": {
      dispatch({ type: "OPEN", data, title, loader, Component: <Component disabled={true} data={data} isView={true} options={options} title={title} /> })
      break
    }

    case "ADD": {
      dispatch({
        type: "OPEN",
        data,
        Component:
        <Component
          data={data} options={options}
          submit={submit}
          title={title? title : ""}
          loader={loader}
        />
      })
      break
    }

    case "EDIT": {
      dispatch({
        type: "OPEN",
        data,
        title,
        loader,
        Component:
        <Component
          data={data} options={options}
          isEdit={true} submit={submit}
          title={title? title : ""}
          loader={loader}
        />
      })
      break
    }

    case "DELETE": {
      ConfirmAlert({ ...deleteOptions })
      break
    }

    case "CLOSE": {
      dispatch({ type: "CLOSE" })
      break
    }

    default:
      return null
  }
}

export const reducer = (state = initialState, action) => {
  const { type, Component, title } = action
  switch (type) {
    case "OPEN": {
      return {
        ...state, openModal: true, Component, title
      }
    }

    case "CLOSE": {
      return {
        ...state, openModal: false
      }
    }

    default:
      return null
  }
}