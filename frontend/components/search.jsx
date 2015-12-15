var React = require('react');
var GroupStore = require('../stores/group');

var Search = React.createClass({
  getInitialState: function(){
    return { searchString: "" };
  },

  handleChange: function(event){
    this.setState({searchString: event.currentTarget.value});
  },

  handleClick: function(event){
    this.setState({searchString: event.currentTarget.innerText});
  },

  filteredGroups: function(){
    var regex = new RegExp(this.state.searchString);
    return GroupStore.all().filter(function(group){
      return (group.title.search(regex) > -1);
    });
  },

  render: function(){
    var that = this;
    return(
      <div className="search">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Search"
                   onChange={this.handleChange}
                   value={this.state.searchString}>
                 </input>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul>{
            this.filteredGroups().map(function(group){
              return <li key={group.id}
                         onClick={that.handleClick}>{group.title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Search;
