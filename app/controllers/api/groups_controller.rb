class Api::GroupsController < ApplicationController
  before_action :ensure_login

  def index
    @groups = Group.includes(:events)
  end

  def create
    @group = Group.new(group_params)
    @group.organizer_id = current_user.id

    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])

    if @group.destroy
      render :index
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])

   if @group.update(group_params)
     render :show
   else
     render json: @group.errors.full_messages, status: 422
   end
  end

  def show
    @current_user = current_user
    @group = Group.find(params[:id])
    @organizer = User.find_by(id: @group.organizer_id)
  end

  private
  def group_params
    params.require(:group).permit(:title, :body, :location,
                                  :organizer_id, :event_id)
  end
end
