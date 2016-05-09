require 'rails_helper'

RSpec.describe "User", :type => :model do

  describe "associations" do
    it "should have many groups" do
      u = User.reflect_on_association(:groups)
      u.macro.should == :has_many
    end
  end

  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(name: 'jack bruce', email: "jack_bruce@email.com", password: "abcdef")
      user = User.find_by_email("jack_bruce@email.com")
      expect(user.password).not_to be("abcdef")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(email: "jack_bruce", password: "abcdef")
    end
  end
end
