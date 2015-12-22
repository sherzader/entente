class StaticPagesController < ApplicationController
  before_filter :ensure_login
  def root
  end
end
