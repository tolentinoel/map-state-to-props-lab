import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {


  render() {

    let numOfUsers = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        <ul>
          Users!
          {numOfUsers}
          <h4>{this.props.num}</h4>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return {
    users: state.users,
    num: state.users.length
    }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
