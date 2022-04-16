class React::PostsController < ReactController
  before_action :authenticate_user!

  def index

  end
end