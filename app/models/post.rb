class Post < ApplicationRecord
  validates :title, :presence => true,
            :length => { :minimum => 5 }
  has_many :comments, :dependent => :destroy
  mount_uploader :image, ImageUploader
  has_many :likes, dependent: :destroy
  has_many :favorites, dependent: :destroy
  belongs_to :user
  belongs_to :category

end