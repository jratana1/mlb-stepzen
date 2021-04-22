import React, { Component } from 'react';
import { connect } from 'react-redux';

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

class Reading extends Component {

  constructor() {
    super();
    this.state = {
      question: '',
      // cards: [],
      // flag: true
    };
  }

  handleChange = event => {
    this.setState({
      question: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let cardIds= getRandom(this.props.cards,3).map(card => card.id)
    this.state.cards= cardIds
    this.state.flag= true
    // this.setState((state) => {
    //   return {cards: cardIds}
    // });
    // this.setState((state) => {
    //   return {flag: true}
    // });
    // this.props.addReading(this.state)

    let config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${sessionStorage.token}`
      },
      body: JSON.stringify(this.state)
  }
  fetch(`http://localhost:3000/api/v1/readings`, config)
  // fetch(`https://safe-cove-73377.herokuapp.com/api/v1/readings`, config)
      .then(res => res.json())
      .then(res => {
          this.setState({question: ""})
          this.props.addReading(res)
      })
  }

  render() {
    return(
        <form className="question" onSubmit={ event => this.handleSubmit(event) }>
          <p className="Form-Input">
            <label>Ask A Question</label>
            <textarea
              type="text"
              onChange={this.handleChange} value={this.state.question}/>
          </p>
          <input type="submit" />
       </form>

   );
  }
};

const mapDispatchToProps = dispatch => {
    return {
      addReading: formData => dispatch({ type: 'ADD_READING', payload: formData })
    };
  };

export default connect(null, mapDispatchToProps)(Reading); 