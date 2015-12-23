var React = require('react');
var GroupForm = require('./groupForm.jsx');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var History = require('react-router').History;
var ApiUtil = require('../util/apiUtil');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
          <Modal isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles} id="welcome">
              <h2>Welcome, {window.CURRENT_USER.name}</h2><br />
              Entente is a place to find groups of individuals with similar interests.<br />
              With these kindred clans, your aim is to coordinate rituals of your choosing. <br />
              Have fun! <br />
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
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="start-group" data-toggle="modal" data-target="#new-group-modal"><a href="#"><dt>Start Group</dt></a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><dt>Profile</dt><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to={'/profile'}>My Profile</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" onClick={this._logout}>Logout</a></li>
                  <li role="separator" className="divider"></li>
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
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
        <footer className='app-footer'></footer>
    </div>
    );
  }
});

module.exports = App;
