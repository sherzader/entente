class Api::UsersGroupsController < ApplicationController
  def create
    @user_group = current_user.users_groups.new(users_groups_params)
  end

  def index
    @users_groups = current_user.users_groups
  end

  def destroy
    @user_group = current_user.users_groups
  end

  private
  def users_groups_params
    params.require('users_groups').permit(:user_id, :group_id)
  end
end
