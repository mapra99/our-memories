# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts 'Creating sample posts'
100.times do |_i|
  post = Post.new(
    title: Faker::ChuckNorris.fact
  )

  image_file = "dummy-#{(1..5).to_a.sample}.png"
  post.image.attach(io: File.open("spec/files/#{image_file}"), filename: image_file, content_type: 'image/png')
  post.save!
end
