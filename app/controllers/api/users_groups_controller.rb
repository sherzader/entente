class Api::UsersGroupsController < ApplicationController
  def create
    @user_group = UsersGroup.new(group_id: users_groups_params)
    @user_group.user_id = current_user.id

    if @user_group.save
      flash[:success] = "Group Joined!"
    else
      flash[:error] = "Unable to join!"
    end
  end

  def index
    @users_groups = current_user.users_groups
  end

  def destroy
    @user_group = current_user.users_groups
    flash[:success] = "Left Group!"
  end

  private
  def users_groups_params
    params.require(:users_group).permit(:user_id, :group_id)
  end
end
