require 'rails_helper'

feature "Sign up" do
  before :each do
    visit "/signup"
  end

  it "has a user sign up page" do
    expect(page).to have_content "Sign Up"
  end

  it "takes a username and password" do
    expect(page).to have_content "Email"
    expect(page).to have_content "Password"
  end
end

feature "Without auth" do
  it "user is not allowed access to groups index and is redirected to login" do
    visit '/groups'

    # redirect to login page
    expect(current_path).to eq("/login")
  end
end

feature "Log in" do
  it "has a login page" do
    visit "/login"
    expect(page).to have_content "Guest"
  end

  it "takes a username and password" do
    visit "/login"
    click_button "returning"
    expect(page).to have_content "Email"
    expect(page).to have_content "Password"
  end

  it "returns to login on failure" do
    visit "/login"
    click_button "returning"
    fill_in "Email", with: 'ginger_baker'
    fill_in "Password", with: 'hello'
    click_button "Log In"

    # return to sign-in page
    expect(page).to have_content "Guest"
  end
end
