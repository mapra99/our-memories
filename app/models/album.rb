class Album < ApplicationRecord
  include Paginable

  belongs_to :user
  has_many :posts, dependent: :destroy

  validates :name, presence: true

  scope :sorted_by_newest, -> { order(created_at: :desc) }
end
