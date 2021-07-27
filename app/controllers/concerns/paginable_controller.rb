module PaginableController
  extend ActiveSupport::Concern

  included do
    before_action :limit
    before_action :offset
  end

  def limit
    @limit = params[:limit]
  end

  def offset
    @offset = params[:offset] || 0
  end
end
