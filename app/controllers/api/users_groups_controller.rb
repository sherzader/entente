class Api::UsersGroupsController < ApplicationController
  def create
    @user_group = UsersGroup.new(users_groups_params)
    @user_group.user_id = current_user.id

    if @user_group.save
      flash[:success] = "Group Joined!"
      render json: @user_group
    else
      flash[:error] = "Unable to join!"
      render json: @user_group.errors.full_messages
    end
  end

  def index
    @users_groups = current_user.users_groups
  end

  def destroy
    @user_group = UsersGroup.find(params[:id])

    if current_user.id == @user_group.user_id
      flash[:success] = "Left Group!"
      render json: @user_group
    else
      flash[:error] = "Unable to leave group!"
      render json: @user_group.errors.full_messages
    end
  end

  private
  def users_groups_params
    params.require(:users_group).permit(:user_id, :group_id)
  end
end
