var React = require('react');
var ReactDOM = require('react-dom');
var GroupStore = require('../../stores/group');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('../../stores/user');
var GroupItem = require('./groupItem.jsx');
var EventIndex = require('../events/eventIndex.jsx');
var EventForm = require('../events/eventForm.jsx');
var History = require('react-router').History;
var Link = require('react-router').Link;

var Show = React.createClass({
  mixins: [History],
  getInitialState: function () {
    var groupId = this.props.params.id;
    var group = ApiUtil.fetchGroup(groupId) || GroupStore.findGroupById(groupId) || {};
    return { group: group, current_user: UserStore.findUserById(window.CURRENT_USER.id),
             users_groups: GroupStore.allUsersGroups(),
             join_text: "Join"};
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
    var newState = {};
    var groupId = this.props.params.id;
    var group = GroupStore.findGroupById(groupId);
    this.setState({ group: group });

    newState.users_groups = GroupStore.allUsersGroups();
    if (newState.users_groups !== undefined){
      var mssgText = "Join";

      newState.users_groups.forEach(function (user_group) {
        if (user_group.group_id === this.state.group.id){
          var node = ReactDOM.findDOMNode(this.refs.toggle);
          mssgText = "Leave";
        }
      }.bind(this));

      newState.join_text = mssgText;
    }

    this.setState(newState);
  },
  _toggleGroup: function (e) {
    e.preventDefault();
    e.stopPropagation();
    var that = this;
    var node = ReactDOM.findDOMNode(this.refs.toggle);

    if (e.currentTarget.innerHTML === "Join"){
      ApiUtil.createUsersGroup(this.state.group);
    } else {
        var found = this.state.users_groups.find(function (users_group) {
          return (users_group.group_id === this.state.group.id);
        }.bind(this));

        ApiUtil.destroyUsersGroup(found);
    }
  },
  _joinGroup: function () {
    ApiUtil.joinGroup();
  },
  _goBack: function (e) {
    e.preventDefault();

    this.history.push("/");
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroup(this.props.params.id);
    ApiUtil.fetchUsersGroups();
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
      <div className="row" ref="row">
        <div className="col-2 col-md-2 members container">
          <dl>
          {memberCount}
          </dl>
          {members}
        </div>
        <div className="figure col-4 col-md-4 group-panel">
          <img src={group_img} alt="group_pic" />
            <h4><a className="group-show-join" href="#" ref="toggle" onClick={this._toggleGroup}>{this.state.join_text}</a></h4>

          <div className="caption" onClick={this.props.onClick}>
            <div className='group-buttons'>
              <button className="glyphicon glyphicon-th" title="Back Home" onClick={this._goBack}></button>
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
        <div className="col-3 col-md-3 event-index">
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
