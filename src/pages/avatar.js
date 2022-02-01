import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button } from '@material-ui/core';
import avatar from '../assets/videos/avatar.mp4';

class Avatar extends Component {
  moveNext = () => {
    this.props.history.push('/shop');
  }

  render() {
    const { name } = this.props;
    return (
      <div className="avatar-page v-r v-c">
        <h1>{name.length > 0 ? `${name},` : ''} Your Avatar is Created!</h1>
        <div className="underline" />
        <video src={avatar} autoPlay={true} loop={true}/>
        <Button onClick={this.moveNext}>Shop with Avatar</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.auth.name
  }
}

export default connect(mapStateToProps, {})(withSnackbar(Avatar));
