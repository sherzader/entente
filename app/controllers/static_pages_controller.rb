class StaticPagesController < ApplicationController
  before_filter :logged_in?
  def root
  end
end
