FactoryBot.define do
  factory :album do
    association :user

    name { Faker::Movie.title }
  end
end
