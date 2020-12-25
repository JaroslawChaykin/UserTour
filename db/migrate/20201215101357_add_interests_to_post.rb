class AddInterestsToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :interests, :string
  end
end
