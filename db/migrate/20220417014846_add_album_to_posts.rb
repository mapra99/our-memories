class AddAlbumToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :album, null: true, foreign_key: true
  end
end
