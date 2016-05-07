class UsersController < ApplicationController
before_filter :ensure_login, only: [:index, :show]

  def create
    @user = User.new(user_params)

    if @user.save
      if @user.img_url.nil?
        @user.img_url = "23947837641_e5456f1850_m_voo3vr.jpg"
      end
      log_in!(@user)
      flash[:notice] = "Sign up successful."
      redirect_to :root
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
    render json: :show
  end

  def index
    @users = User.all
    render json: :index
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :group_id, :event_id)
  end
end
