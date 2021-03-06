class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      log_in!(user)
      flash[:sucess] = ["Successful Login!"]
      redirect_to :root
    else
      flash.now[:errors] = ["Invalid credentials"]
      render :new
    end
  end

  def new
  end

  def destroy
    log_out! #/session/:id destroy, log out page
    render json: {}
  end
end
