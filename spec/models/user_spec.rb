require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    subject { build(:user) }

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
  end

  context 'associations' do
    it { should have_many(:posts) }
    it { should have_many(:albums) }
  end
end
