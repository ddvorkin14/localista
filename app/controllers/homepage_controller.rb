class HomepageController < ApplicationController
  def index
    if current_user && !current_user.onboarded?
      redirect_to onboarding_path
    end
  end

  def search
    interests = Interest.all

    if params[:query].present?
      interests = interests.where("name ILIKE ?", "%#{params[:query]}%")
    end

    render json: interests
  end
end