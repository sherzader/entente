var React = require('react');
var GroupForm = require('./groupForm.jsx');
var Link = require('react-router').Link;
var Modal = require('boron/OutlineModal');
var History = require('react-router').History;
var ApiUtil = require('../util/apiUtil');

var App = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    this.showModal();
  },
  showModal: function(){
    this.refs.modal.show();
   },
  hideModal: function(){
    this.refs.modal.hide();
  },
  _logout: function () {
    ApiUtil.logout();
  },
  render: function () {
    return(
      <div className="app">
        <Modal ref="modal" className="welcome-modal">
          <h2>Welcome, {window.CURRENT_USER.name}</h2>
          <button onClick={this.hideModal}>Close</button>
        </Modal>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand active" href="/#">Entente</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#"></a></li>
              <li data-toggle="modal" data-target="#new-group-modal"><a href="#">Start Group</a></li>
              <li className="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span class="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to={'/profile'}>My Profile</Link></li>
                  <li><a href="#" onClick={this._logout}>Logout</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </nav>
        <div className="modal fade" id="new-group-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <GroupForm history={this.history} />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
