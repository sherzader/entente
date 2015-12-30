var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var UserStore = require('../stores/user');
var GroupItem = require('./groupItem.jsx');
var EventIndex = require('./eventIndex.jsx');
var EventForm = require('./eventForm.jsx');
var History = require('react-router').History;
var Link = require('react-router').Link;

var Show = React.createClass({
  mixins: [History],
  getInitialState: function () {
    var groupId = this.props.params.id;
    var group = ApiUtil.fetchGroup(groupId) || GroupStore.findGroupById(groupId) || {};
    return { group: group, current_user: UserStore.findUserById(window.CURRENT_USER.id)};
  },
  _deleteGroup: function () {
    var group = this.state.group;

    ApiUtil.destroyGroup(group, function () {
      this.history.push("/");
    }.bind(this));
  },
  _editGroup: function (e) {
    e.preventDefault();

    var group = this.state.group;

    ApiUtil.editGroup(group, function () {
      this.history.push("/groups/" + group.id + "/edit");
    }.bind(this));
  },
  _onChange: function () {
    var groupId = this.props.params.id;
    var group = GroupStore.findGroupById(groupId);
    this.setState({ group: group });
  },
  _joinGroup: function () {
    ApiUtil.joinGroup();
  },
  _goBack: function (e) {
    e.preventDefault();

    this.history.push("/");
  },
  handleItemClick: function () {
    this.history.pushState(null, "/groups/" + this.state.group.id + "/events/new" );
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser(window.CURRENT_USER.id);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    var name = "";
    var created_at = "";
    var organizer_path = "";
    if (this.state.group.organizer){
      name = this.state.group.organizer.name;
      created_at = this.state.group.created_at;
      organizer_path = "/users/" + this.state.group.organizer.id;
    }
    var members = this.state.group.users.map(function (member) {
      var img_path = "http://res.cloudinary.com/sherzader/image/upload/c_fill,g_face,r_max,w_50/" + member.img_url;
      var user_path = "/users/" + member.id;
      return (<li key={member.id}><img src={img_path} alt="user_pic" /><Link to={user_path}>{member.name}</Link></li>)
    });
    return(
      <div className="container">
        <div className="col-md-4 members">
          <dl><dt>Members</dt></dl>
          <hr />
          {members}
        </div>
        <div className="figure col-md-4">
          <button className="glyphicon glyphicon-menu-left" onClick={this._goBack}></button>
          <img src={this.state.group.img_url} alt="group_pic" />
          <div className="caption" onClick={this.props.onClick}>
            <dl>
              <dt>Group:</dt> <dd>{this.state.group.title}</dd>
              <hr />
              <dt>Organized by:</dt> <dd><Link to={organizer_path}>{name}</Link></dd>
              <hr />
              <dt>Created:</dt> <dd>{created_at}</dd>
              <hr />
              <dt>Where:</dt> <dd>{this.state.group.location}</dd>
              <hr />
              <dt>About Us:</dt> <dd>{this.state.group.body}</dd><hr />
            </dl>
            <div className="group-btns">
              <button className="glyphicon glyphicon-remove"
                      onClick={this._deleteGroup}></button>
              <button className="glyphicon glyphicon-pencil"
                      onClick={this._editGroup}></button>
            </div>
          </div>
        </div>
        <div className="col-md-4 event-index">
          <button className='btn btn-primary createEvent' data-toggle="modal" data-target="#new-event-modal">Create Event</button>
          <EventIndex group={this.state.group} history={this.history} /></div>
        <div className="modal fade" id="new-event-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <EventForm history={this.history} group={this.state.group} />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal"><dt>Cancel</dt></button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Show;
