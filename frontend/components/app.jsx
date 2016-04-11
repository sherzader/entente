var React = require('react');
var GroupForm = require('./groups/groupForm.jsx');
var Link = require('react-router').Link;
var History = require('react-router').History;
var ApiUtil = require('../util/apiUtil');
var Modal = require('boron/DropModal');
window.myTour = require('../util/tour');

var App = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return { modalIsOpen: false };
  },
  componentDidMount: function () {
    this.setState({modalIsOpen: true});
    this.showModal();
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
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
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className='navbar-brand' data-toggle="modal" data-target="#welcome-modal"><a className="navbar-brand active" href="#" title="Welcome!">Entente<span className="glyphicon glyphicon-pushpin" /></a></div>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="nav-item-divider"></li>
              <li className='nav-item' data-toggle="modal" data-target="#new-group-modal"><a href="#">Start Group<span className="glyphicon glyphicon-plus" /></a></li>
              <li className="nav-item-divider"></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item-divider"></li>
              <li className='nav-item'><Link to={'/profile'}>Profile<span className="glyphicon glyphicon-user" /></Link></li>
              <li className="nav-item-divider"></li>
              <li className='nav-item'><a href="#" onClick={this._logout}>Logout<span className="glyphicon glyphicon-log-out" /></a></li>
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
                <button className="btn btn-secondary" data-dismiss="modal"><dt>Cancel</dt></button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Modal ref="modal">
          <div className="intro-modal">
            <div id="welcome-modal-title"><h2>Welcome to Entente!</h2></div><h3>/änˈtänt/</h3>
            <div className="modal-footer">
              <h4 id="welcome-info">Entente is a place to find or create groups and events that match your interests.</h4>
              <h4 id="welcome-info">Follow the tour to see all the cool features.</h4>
            </div>
          </div>
          <button onClick={this.hideModal}><dt>Continue</dt></button>
        </Modal>
        {this.props.children}
        <div className="app-footer">
          <div className="footer-item"><a href="http://github.com/sherzader/entente" target = "_blank"><img src="http://res.cloudinary.com/sherzader/image/upload/v1460184917/octocat_vcuk8h.png" />Github</a></div>
        </div>
    </div>
    );
  }
});

module.exports = App;
