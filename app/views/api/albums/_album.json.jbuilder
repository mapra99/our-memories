json.id album.id
json.name album.name
json.posts album.posts do |post|
  json.partial! 'api/posts/post', post: post
end
json.user do
  json.id album.user.id
  json.name album.user.name
end
json.createdAt album.created_at
json.updatedAt album.updated_at
