class CreateNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :nfts do |t|
      t.float :price
      t.string :image
      t.text :description
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :for_sale
      t.datetime :sale_date
      t.integer :creator_id
      t.string :title

      t.timestamps
    end
  end
end
