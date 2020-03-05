class Card < ApplicationRecord
  belongs_to :list
  has_many :comments, dependent: :destroy
  
  validates_presence_of :title, allow_blank: false
end
