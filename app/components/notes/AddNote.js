var React = require('react');

var AddNote = React.createClass({
  // validating property types to ensure the values being past through
  // are correct
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  // used to carry the value of the input
  setRef: function(ref){
    this.note = ref;
  },
  // function to trigger after input has been submitted
  handleSubmit: function() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    )
  }
});

module.exports = AddNote;
