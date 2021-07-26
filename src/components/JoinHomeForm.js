import React, { useEffect } from "react";
import { connect } from "react-redux";
import loadAllHomes from "../actions/loadAllHomes"

const JoinHomeForm = props => {

  useEffect(() => {
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    token && props.loadAllHomes(token);
  }, []);

  return (
    <div> in join home form</div>
  )
}

const mapDispatchToProps = dispatch => {
  return ({
    loadAllHomes: (token) => dispatch(loadAllHomes(token))
  })
}

export default connect(null, mapDispatchToProps)(JoinHomeForm);

//TODO: grab all existing homes from backend, render them in dropdown then send selection to backend to update user
