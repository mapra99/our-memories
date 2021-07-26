require_relative "20210710024729_devise_token_auth_create_users"

class RevertDeviseTokenAuthCreateUsers < ActiveRecord::Migration[6.1]
  def change
    revert DeviseTokenAuthCreateUsers
  end
end
