var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./github/UserProfile');
var Notes = require('./notes/Notes');

var Profile = React.createClass({
  getInitialState() {
    return {
      notes: [1,2,3],
      bio: {
        name: 'Paul Morello'
      },
      repos: ['a', 'b', 'c'],
    }
  },

  render: function() {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
})

module.exports = Profile;
