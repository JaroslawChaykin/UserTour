class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :author
      t.string :title
      t.text :content
      t.string :timeBypass
      t.string :price

      t.timestamps
    end
  end
end
