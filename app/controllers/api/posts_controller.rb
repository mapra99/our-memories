class Api::PostsController < ApiController
  def index
    @posts = Post.all
    @posts = @posts.paginate(@limit, @offset) if @limit.present?
  end

  def create
  end
end
