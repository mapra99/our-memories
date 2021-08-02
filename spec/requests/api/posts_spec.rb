require 'rails_helper'
require 'byebug'

RSpec.describe '/api/posts', type: :request do
  context 'GET with no params' do

    let!(:posts) { create_list :post_with_image, 5 }

    before :each do
      get '/api/posts'
      @payload = JSON.parse(response.body)
      # byebug
    end

    it 'should respond with a 200 status' do
      expect(response.status).to eq(200)
    end
    
    it 'is not empty' do
      expect(@payload).not_to be_empty
    end

    it 'should have all posts' do
      expect(@payload.length).to eq(5)
    end

    example 'payload structure' do
      post = @payload.sample

      expect(post).to have_key('title')
      expect(post).to have_key('id')
      expect(post).to have_key('imageUrl')
      expect(post).to have_key('createdAt')
      expect(post).to have_key('updatedAt')
    end
  end

  context 'GET with pagination params' do

    let!(:posts) { create_list :post_with_image, 5 }

    before :each do
      get '/api/posts?offset=2&limit=3'
      @payload = JSON.parse(response.body)
    end

    it 'should respond with a 200 status' do
      expect(response.status).to eq(200)
    end
    
    it 'is not empty' do
      expect(@payload).not_to be_empty
    end

    it 'should have all paginated posts' do
      expect(@payload.length).to eq(3)
      expect(@payload[0]['id']).to eq(posts[2].id)
      expect(@payload[1]['id']).to eq(posts[3].id)
      expect(@payload[2]['id']).to eq(posts[4].id)
    end

    example 'payload structure' do
      post = @payload.sample

      expect(post).to have_key('title')
      expect(post).to have_key('id')
      expect(post).to have_key('imageUrl')
      expect(post).to have_key('createdAt')
      expect(post).to have_key('updatedAt')
    end
  end
end
