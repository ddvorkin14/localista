class Interest < ApplicationRecord
  has_and_belongs_to_many :users
  validates :name, presence: true, uniqueness: true

  def self.ransackable_associations(auth_object = nil)
    ["users"]
  end

  def self.ransackable_attributes(auth_object = nil)
    ["created_at", "id", "id_value", "name", "updated_at"]
  end
end
