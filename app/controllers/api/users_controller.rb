class Api::UsersController < ApiController
  def current
    head :no_content and return unless user_signed_in?

    @current_user = current_user
  end
end