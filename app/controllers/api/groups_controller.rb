class Api::GroupsController < ApplicationController
  before_action :ensure_login

  def index
    @groups = Group.includes(:events)
  end

  def create
    @group = Group.new(group_params)
    @group.organizer_id = current_user.id

    if @group.save
      if @group.img_url.nil?
        @group.img_url = "251360_38fb7b5cc8_z_jfvdzo.jpg"
      end
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
  end

  private
  def group_params
    params.require(:group).permit(:title, :body, :location,
                                  :organizer_id, :event_id)
  end
end
