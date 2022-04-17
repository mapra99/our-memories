
namespace :backfills do
  desc "Asigns current posts without owners to a specific user given its email"
  task :posts_owners => :environment do |_task, _args|
    owner = User.find_by(email: ENV['OWNER_EMAIL'])
    raise StandardError, "owner not found" if owner.blank?

    no_owner_posts = Post.where(user: nil)
    no_owner_posts.each do |post|
      post.update(user: owner)
    end
  end
end
