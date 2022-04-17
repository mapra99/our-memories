require 'rails_helper'
require 'byebug'

RSpec.describe Api::AlbumsController, type: :controller do
  let(:user) { create(:user) }

  describe 'when authenticated' do
    before do
      sign_in user
    end

    context 'GET' do
      describe 'with no params' do
        let!(:albums) { create_list :album, 5, user: user }

        before :each do
          get :index, format: :json
          @payload = JSON.parse(response.body)
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
          album = @payload.sample

          expect(album).to have_key('name')
          expect(album).to have_key('id')
          expect(album).to have_key('posts')
          expect(album).to have_key('createdAt')
          expect(album).to have_key('updatedAt')
          expect(album).to have_key('user')
        end
      end

      describe 'with pagination params' do
        let!(:albums) { create_list :album, 5, user: user }

        before :each do
          get :index, params: { offset: 2, limit: 3 }, format: :json
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
          expect(@payload[0]['id']).to eq(albums[2].id)
          expect(@payload[1]['id']).to eq(albums[1].id)
          expect(@payload[2]['id']).to eq(albums[0].id)
        end

        example 'payload structure' do
          album = @payload.sample

          expect(album).to have_key('name')
          expect(album).to have_key('id')
          expect(album).to have_key('posts')
          expect(album).to have_key('createdAt')
          expect(album).to have_key('updatedAt')
          expect(album).to have_key('user')
        end
      end
    end

    context 'POST' do
      describe 'album submission' do
        let(:album_params) do
          {
            album: {
              name: Faker::ChuckNorris.fact
            }
          }
        end

        before :each do
          post :create, params: album_params, format: :json
          @payload = JSON.parse(response.body)
        end

        it 'should respond with a 200 status' do
          expect(response.status).to eq(200)
        end

        it 'should create a new post' do
          expect(Album.last.id).to eq(@payload['id'])
        end

        it 'should return the created post' do
          expect(@payload['name']).to eq(album_params[:album][:name])
        end
      end
    end
  end

  describe 'when not authenticated' do
    context 'GET' do
      let!(:albums) { create_list :album, 5 }

      before :each do
        get :index, format: :json
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end

    context 'POST' do
      before :each do
        post :create, params: {}, format: :json
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end
  end
end
