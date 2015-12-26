var React = require('react');
var GroupForm = require('./groupForm.jsx');
var GroupStore = require('../stores/group');
var Link = require('react-router').Link;
var Modal = require('boron/DropModal');
var History = require('react-router').History;
var ApiUtil = require('../util/apiUtil');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Search = require('./search.jsx');

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
    return { modalIsOpen: false, searchString: "", groups: GroupStore.all() };
  },
  handleChange: function(e){
    this.setState({searchString: e.currentTarget.value});
  },
  filteredGroups: function(){
    if (this.state.searchString === ""){
      return this.state.groups;
    }else {
      var regex = new RegExp(this.state.searchString);
      return this.state.groups.filter(function(group){
        return (group.title.search(regex) > -1);
      });
    }
  },
  componentDidMount: function () {
    this.setState({modalIsOpen: true});
    this.showModal();
  },
  showModal: function () {
    this.refs.modal.show();
  },
  hideModal: function () {
    this.refs.modal.hide();
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
          <Modal ref="modal"
            style={customStyles} className="welcome">
            <dl>
            <br /><dt><h1>Welcome</h1></dt><br />
            <dd>
            Entente | \änˈtänt\ &nbsp;is a place to find groups of individuals with similar interests.<br />
            With these kindred clans, your aim is to coordinate rituals of your choosing. <br /><br />
            Have fun! <br />
            </dd>
            </dl><br /><br />
          <button className="glyphicon glyphicon-remove" onClick={this.hideModal} />
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
            <a className="navbar-brand active" href="/#"><dt>Entente</dt></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className='nav-item' data-toggle="modal" data-target="#new-group-modal"><a href="#"><dt>Start Group</dt></a></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="input-group">
                <input type="text"
                       className="form-control"
                       placeholder="Search groups..."
                       onChange={this.handleChange}
                       value={this.state.searchString}>
                     </input>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                </div>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className='nav-item'><Link to={'/myGroups'}><dt>My Groups</dt></Link></li>
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
                <button className="glyphicon glyphicon-remove" data-dismiss="modal" />
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
