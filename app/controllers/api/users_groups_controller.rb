class Api::UsersGroupsController < ApplicationController
  def create
  end

  def destroy
  end

  private
  def users_groups_params
    params.require('users_groups').permit(:user_id, :group_id)
  end
end
