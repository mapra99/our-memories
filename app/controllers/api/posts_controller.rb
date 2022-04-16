class Api::PostsController < ApiController
  before_action :authenticate_user!

  def index
    @posts = Post.eager_load_image.all.sorted_by_newest
    @posts = @posts.paginate(@limit, @offset) if @limit.present?
  end

  def create
    @post = current_user.posts.new(post_params)
    @post.image.attach(blob_params[:signed_id])

    render json: @post.errors.full_messages, status: 401 unless @post.save
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy

    head :no_content
  end

  def update
    @post = current_user.posts.find(params[:id])
    @post.update(post_params)

    render json: @post.errors.full_messages, status: 401 unless @post.valid?
  end

  private

  def post_params
    params.require(:post).permit(:title)
  end

  def blob_params
    params.require(:blob).permit(:signed_id)
  end
end
