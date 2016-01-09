var React = require('react');
var GroupForm = require('./groupForm.jsx');
var SearchGroups = require('./searchGroups.jsx');
var Link = require('react-router').Link;
var History = require('react-router').History;
var ApiUtil = require('../util/apiUtil');

var App = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return { modalIsOpen: false };
  },
  componentDidMount: function () {
    this.setState({modalIsOpen: true});
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  _logout: function () {
    ApiUtil.logout();
  },
  render: function () {
    return(
      <div className="app">
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className='navbar-brand' data-toggle="modal" data-target="#welcome-modal"><a className="navbar-brand active" href="#" title="Click!">Entente</a></div>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="nav-item-divider"></li>
              <li className='nav-item' data-toggle="modal" data-target="#new-group-modal"><a href="#"><dt>Start Group</dt></a></li>
              <li className="nav-item-divider"></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <SearchGroups history={this.history} />
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item-divider"></li>
              <li className='nav-item'><Link to={'/myGroups'}><dt>My Groups</dt></Link></li>
              <li className="nav-item-divider"></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><dt>Profile</dt><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li className="my-profile"><Link to={'/profile'}>My Profile</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" onClick={this._logout}>Logout</a></li>
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </nav>
        <div className="modal fade" id="new-group-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <GroupForm history={this.history} />
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="welcome-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div id="welcome-modal-title"><h3>Entente</h3></div><h4>/änˈtänt/</h4>
                <div className="modal-footer">
                  <h4 id="welcome-info">Find groups and events that match your interests.</h4>
                  <h4 id="welcome-info">You will see all available groups to join on this page.</h4>
                </div>
                <div className="modal-footer" id="welcome-list">
                  <p>&#x25BA; Join groups to save them to My Groups.</p>
                  <p>&#x25BA; Use the calendar to filter for groups with events on that day.</p>
                  <p>&#x25BA; Search for groups by title.</p>
                  <p>&#x25BA; Click on a group to see more information, its members, and its events.</p>
                </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
    </div>
    );
  }
});

module.exports = App;
