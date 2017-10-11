import React from 'react';

class Predictions extends React.Component {
  renderPrediction(prediction, i) {
    return (
      <div className="prediction" key={i}>
        <p>
          <strong>{prediction.user}</strong>
          {prediction.text}
          <button className="remove-comment" onClick={this.props.removePrediction.bind(null, this.props.params.showId, i)}> &times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting")
    const { showId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.prediction.value;
    this.props.addComment(showId, author, comment);
    this.refs.predictionForm.reset();
  }



  render() {
    return (
    <div className="comments">
      {this.props.postPredictions.map(this.renderPrediction)}
      <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="prediction" placeholder="prediction" />
        <input type="submit" hidden/>
      </form>
    </div>
  )
  }
};


export default Predictions;
