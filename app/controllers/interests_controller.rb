class InterestsController < ApplicationController
  def index
    @interests = Interest.all.where(kind: 'activity')
    @locations = Interest.all.where(kind: 'location')

    if params[:query].present?
      @interests = @interests.where("name ILIKE ?", "%#{params[:query]}%")
    end

    if params[:location_query].present?
      @locations = @locations.where("name ILIKE ?", "%#{params[:location_query]}%")
    end

    render json: { activities: @interests, locations: @locations }
  end

  def add_interest
    @interest = Interest.find(params[:interest_id])
    @user = User.find(params[:user_id])

    unless @user.interests.include?(@interest)
      @user.interests << @interest
    end

    render json: @user.to_json(include: :interests)
  end

  def remove_interest
    @interest = Interest.find(params[:interest_id])
    @user = User.find(params[:user_id])
    @user.interests.delete(@interest)

    render json: @user.to_json(include: :interests)
  end
end