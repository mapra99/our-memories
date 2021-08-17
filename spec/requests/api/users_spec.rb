require 'rails_helper'
require 'byebug'

RSpec.describe Api::UsersController, type: :controller do
  context 'GET /current' do
    describe 'not authenticated' do
      before :each do
        get :current, format: :json
        @payload = JSON.parse(response.body)
      end

      it 'should respond with a 200 status' do
        expect(response.status).to eq(200)
      end

      it 'is empty' do
        expect(@payload).to be_empty
      end
    end

    describe 'authenticated' do
      let!(:user) { create :user }

      before :each do
        sign_in user
        get :current, format: :json
        @payload = JSON.parse(response.body)
      end

      it 'should respond with a 200 status' do
        expect(response.status).to eq(200)
      end

      it 'shouldnt be empty' do
        expect(@payload).not_to be_empty
      end

      example 'payload structure' do
        expect(@payload['id']).to eq(user.id)
        expect(@payload['name']).to eq(user.name)
        expect(@payload['username']).to eq(user.username)
        expect(@payload['email']).to eq(user.email)
      end
    end
  end
end
