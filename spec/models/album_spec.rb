require 'rails_helper'

RSpec.describe Album, type: :model do
  context 'validations' do
    subject { build(:album) }

    it { should validate_presence_of(:name) }
  end

  context 'associations' do
    it { should have_many(:posts) }
    it { should belong_to(:user) }
  end
end
