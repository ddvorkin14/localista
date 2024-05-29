class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
    
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)

    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :age, :country, :address1, :address2, :city, :postalcode, :phone, :provincestate, :user_type, :onboarded)
  end
end
