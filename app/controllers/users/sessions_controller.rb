class Users::SessionsController < Devise::SessionsController
  def create
    super do |user|
      user.increment!(:sign_in_count)
    end
  end
end