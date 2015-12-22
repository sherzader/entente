class Api::UsersGroupsController < ApplicationController
  def create
    @user_group = current_user.users_groups
  end

  def destroy
  end

  private
  def users_groups_params
    params.require('users_groups').permit(:user_id, :group_id)
  end
end
