json.id post.id
json.title post.title
json.imageUrl post.image_url
json.createdAt post.created_at
json.updatedAt post.updated_at
json.user do
  json.id post.user.id
  json.name post.user.name
end
