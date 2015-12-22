class User < ActiveRecord::Base
  attr_reader :password
  after_initialize :ensure_session_token

  validates :email, :session_token, :password_digest,
      :name, presence: true
  validates :email, format: { with: /@/ }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, :name, :session_token, uniqueness: true

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
