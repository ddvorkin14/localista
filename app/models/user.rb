class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_and_belongs_to_many :interests
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  after_create :set_onboarding

  def set_onboarding
    self.update(onboarding: false)
  end

  def self.ransackable_associations(auth_object = nil)
    ["interests"]
  end
  
  def self.ransackable_attributes(auth_object = nil)
    [
      "first_name", 
      "last_name", 
      "created_at", 
      "email", 
      "encrypted_password", 
      "id", 
      "id_value", 
      "remember_created_at", 
      "reset_password_sent_at", 
      "reset_password_token", 
      "updated_at",
      "age",
      "country",
      "address1",
      "address2",
      "city",
      "postalcode",
      "phone"
    ]
  end
end
