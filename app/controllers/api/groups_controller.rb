class Api::GroupsController < ApplicationController
  def index
    @groups = Group.all
  end

  def create
    @group = Group.new(group_params)

    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])

    if @group.destroy
      render :show
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
    @group = Group.find(params[:id])
  end

  private
  def group_params
    params.require(:group).permit(:title, :body, :location,
                                  :organizer_id, :event_id, :user_id)
  end
end
