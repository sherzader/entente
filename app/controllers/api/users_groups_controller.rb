class Api::UsersGroupsController < ApplicationController
  def create
    @user_group = UsersGroup.new(users_groups_params)
    @user_group.user_id = current_user.id

    if @user_group.save
      render json: @user_group
    else
      render json: @user_group.errors.full_messages, status: 400
    end
  end

  def index
    @users_groups = current_user.users_groups
  end

  def destroy
    @user_group = UsersGroup.find(params[:id])

    if current_user.id == @user_group.user_id
      @user_group.destroy
      render json: @user_group
    else
      render json: @user_group.errors.full_messages, status: 400
    end
  end

  private
  def users_groups_params
    params.require(:users_group).permit(:user_id, :group_id)
  end
end
