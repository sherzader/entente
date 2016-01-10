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
    ApiUtil.fetchGroup(this.props.params.id);
    ApiUtil.fetchEvents(this.props.params.id);
    ApiUtil.fetchUser(window.CURRENT_USER.id);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    var group_img = "http://res.cloudinary.com/sherzader/image/upload/" + this.state.group.img_url;
    var organizer = {};
    var created_at = "";
    var organizer_path = "";
    var memberCount = "";
    var members = "";
    var organizer_member = "";
    if (this.state.group.organizer){
      organizer = this.state.group.organizer;
      created_at = this.state.group.created_at;
      organizer_path = "/users/" + organizer.id;
      organizer_member = <li key={organizer.id}><img src={"http://res.cloudinary.com/sherzader/image/upload/c_fill,g_face,r_max,w_50/" + organizer.img_url} alt="user_pic" /><Link to={organizer_path}>{organizer.name}</Link></li>
    }
    if (this.state.group.users){
      members = this.state.group.users.map(function (member) {
        var img_path = "http://res.cloudinary.com/sherzader/image/upload/c_fill,g_face,w_50,h_50/" + member.img_url;
        var user_path = "/users/" + member.id;
        return (<li key={member.id}><img src={img_path} alt="user_pic" /><Link to={user_path}> &nbsp;{member.name}</Link></li>)
      });
    }
    if (this.state.group.users){
      if (this.state.group.users.length <= 1){
        memberCount = <dl><dt>1 member</dt></dl>;
      } else{
        memberCount = <dl><dt>{this.state.group.users.length} members</dt></dl>;
      }
    }
    return(
      <div className="container">
        <div className="col-md-4 members container">
          <dl>
          {memberCount}
          <hr />
          </dl>
          {members}
        </div>
        <div className="figure col-md-4 container">
          <img src={group_img} alt="group_pic" />
          <div className="caption" onClick={this.props.onClick}>
            <div className='group-buttons'>
              <button className="glyphicon glyphicon-menu-left" title="Back Home" onClick={this._goBack}></button>
              <button className="glyphicon glyphicon-pencil" title="Edit Group" onClick={this._editGroup}></button>
              <button className="glyphicon glyphicon-trash" title="Delete Group" onClick={this._deleteGroup}></button>
            </div>
            <dl>
              <dt>Group:</dt> <dd>{this.state.group.title}</dd>
              <hr />
              <dt>About Us:</dt> <dd>{this.state.group.body}</dd><hr />
              <dt>Where:</dt> <dd>{this.state.group.location}</dd>
              <hr />
              <dt>Organized by:</dt> <dd><Link to={organizer_path}>{organizer.name}</Link></dd>
              <hr />
              <dt>Created:</dt> <dd>{created_at}</dd>
              <hr />
            </dl>
          </div>
        </div>
        <div className="col-md-4 event-index container">
          <button className='btn btn-create-form create-event' data-toggle="modal" data-target="#new-event-modal"><dt>Create Event</dt></button>
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
