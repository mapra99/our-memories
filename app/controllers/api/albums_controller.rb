class Api::AlbumsController < ApiController
  before_action :authenticate_user!

  def index
    @albums = Album.all.sorted_by_newest
    @albums = @albums.paginate(@limit, @offset) if @limit.present?
  end

  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = current_user.albums.new(album_params)

    render json: @album.errors.full_messages, status: 422 unless @album.save
  end

  private

  def album_params
    params.require(:album).permit(:name)
  end
end
