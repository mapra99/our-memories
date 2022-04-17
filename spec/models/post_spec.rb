require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'associations' do
    it { should have_one_attached(:image) }
    it { should belong_to(:user) }
    it { should belong_to(:album).optional}
  end

  context 'validations' do
    it { should validate_presence_of(:title) }
  end

  describe '#image_url' do
    subject { create(:post_with_image) }

    it 'returns a URL for the image' do
      image_url = subject.image_url
      expect(image_url).not_to be_empty
      expect(image_url).to match(URI::DEFAULT_PARSER.make_regexp)
    end
  end
end
