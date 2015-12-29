class Api::OrganizersController < ApplicationController
  def show
    @group = Group.find(params[:id])
    @organizer = User.find_by(id: @group.organizer_id)
  end

  private
  def organizer_params
    params.require(:organizer).permit(:user_id, :group_id)
  end
end
