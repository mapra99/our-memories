class Api::UsersController < ApiController
  
  def current
    if user_signed_in?
      @current_user = current_user
    else
      render json: {}
    end
  end
end