import React from 'react'
import store from '../../store'
import {addTodo} from '../../actions/actionCreators'

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleInputChange(e) {
  //   e.preventDefault();
  //   this.setState({
  //     inputText : e.target.value
  //   });
  // }

  handleClick(e) {
    e.preventDefault();
    // alert('clicked'+this.state.inputText);
    // console.log('clicked: '+this.state.inputText);
    store.dispatch(addTodo(this.textInput.value));
    // console.log(this.textInput.value);
    this.textInput.value="";
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref={(input) => { this.textInput = input; }}
          placeholder="Add Task" />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button" onClick={this.handleClick}>Add</button>
        </span>
      </div>
    )
  }
}

export default AddBar
