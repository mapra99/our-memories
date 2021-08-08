require 'rails_helper'
require 'byebug'

RSpec.describe '/api/posts', type: :request do
  context 'GET' do
    describe 'with no params' do

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
  
    describe 'with pagination params' do
  
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
        expect(@payload[1]['id']).to eq(posts[1].id)
        expect(@payload[2]['id']).to eq(posts[0].id)
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

  context 'POST' do
    describe 'post submission' do
      let(:post_params) do
        {
          post: {
            title: Faker::ChuckNorris.fact
          },
          blob: {
            signed_id: 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec6d0011280ccedbf3dc473f2cb945151f7d6866'
          }
        }
      end

      before :each do
        allow_any_instance_of(ActiveStorage::Attached::One).to receive(:attach).and_return('attached :)')

        post('/api/posts', params: post_params.to_json, headers: { "Content-Type" => "application/json" })
        @payload = JSON.parse(response.body)
      end

      it 'should respond with a 200 status' do
        expect(response.status).to eq(200)
      end

      it 'should create a new post' do
        expect(Post.last.id).to eq(@payload['id'])
      end

      it 'should return the created post' do
        expect(@payload['title']).to eq(post_params[:post][:title])
      end
    end
  end

  context 'DELETE' do
    describe 'post deletion' do
      let(:post) { create(:post_with_image) }

      before :each do
        delete("/api/posts/#{post.id}")
      end

      it 'returns a successful, no content response' do
        expect(response.status).to eq(204)
      end

      it 'deletes the specified post' do
        expect(Post.find_by_id(post.id)).to be_nil
      end
    end
  end
end
