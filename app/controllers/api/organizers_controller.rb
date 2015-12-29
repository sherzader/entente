class Api::OrganizersController < ApplicationController
  def show
    @organizer = Group.find_by(user_id: current_user.id).user_id
  end

  private
  def organizer_params
    params.require(:organizer).permit(:user_id, :group_id)
  end
end
