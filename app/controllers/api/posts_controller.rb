class Api::PostsController < ApiController
  def index
    @posts = Post.all.sorted_by_newest
    @posts = @posts.paginate(@limit, @offset) if @limit.present?
  end

  def create
    @post = Post.new(post_params)
    @post.image.attach(blob_params[:signed_id])

    render json: @post.errors.full_messages, status: 401 unless @post.save
  end

  private

  def post_params
    params.require(:post).permit(:title)
  end

  def blob_params
    params.require(:blob).permit(:signed_id)
  end
end
