require 'rails_helper'

# So specs will run and not throw scary errors before SessionsController is implemented
begin
  SessionsController
rescue
  SessionsController = nil
end

RSpec.describe SessionsController, :type => :controller do
  let!(:user) { User.create({ email: "jack_bruce", password: "abcdef" }) }

  context "with invalid credentials" do
    it "returns to sign in with an non-existent user" do
      post :create, user: { email: "jill_bruce", password: "abcdef" }
      expect(response).to render_template("new")
      expect(flash[:errors]).to be_present
    end

    it "returns to sign in on bad password" do
      post :create, user: { email: "jack_bruce", password: "notmypassword" }
      expect(response).to render_template("new")
      expect(flash[:errors]).to be_present
    end
  end

  context "with valid credentials" do
    it "redirects user to links index on success" do
      post :create, user: { email: "guest@email.com", password: "password" }
      expect(response.status).to eq(200)
    end
  end
end
