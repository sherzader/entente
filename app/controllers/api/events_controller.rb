class Api::EventsController < ApplicationController
  before_filter :require_login!

  def index
    @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    @event.group_id = params[:group_id]
    @event.organizer_id = current_user.id
    
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])

    if @event.destroy
      render :index
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])

   if @event.update(event_params)
     render :show
   else
     render json: @event.errors.full_messages, status: 422
   end
  end

  def show
    @event = Event.find(params[:id])
  end

  private
  def event_params
    params.require(:event).permit(:title, :body, :location, :date,
                                  :group_id)
  end
end
