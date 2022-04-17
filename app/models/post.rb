class Post < ApplicationRecord
  include ActiveStorage::SetCurrentOnModel
  include Paginable

  has_one_attached :image
  belongs_to :user

  validates_presence_of :title

  scope :sorted_by_newest, -> { order(created_at: :desc) }
  scope :eager_load_image, -> { includes(image_attachment: :blob) }

  def image_url
    return '' unless image.attached?

    image.url
  end
end
