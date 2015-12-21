var React = require('react');
var Modal = require('boron/DropModal');
var GroupForm = require('./groupForm.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div className="app">
        <nav className="nav navbar-default">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/#"><h1>Entente</h1></a></li>
              <li data-toggle="modal" data-target="#new-group-modal">Start Group</li>
              <li><a href="#">Notifications</a></li>
              <li className="dropdown">
              <a href="#" class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Profile<span class="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Update Profile</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
            </li>
          </ul>
        </div>
      </nav>
        <div className="modal fade" id="new-group-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <GroupForm />
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
