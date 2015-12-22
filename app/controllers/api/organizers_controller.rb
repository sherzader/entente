class Api::OrganizersController < ApplicationController
  def create
     
  end

  def show
    @organizer = Group.find_by(:organizer_id)
  end

  private
  def organizer_params
    params.require(:organizer).permit(:user_id, :group_id)
  end
end
