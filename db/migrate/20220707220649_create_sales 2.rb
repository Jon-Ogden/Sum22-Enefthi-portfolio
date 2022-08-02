class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.belongs_to :nft, null: false, foreign_key: true
      t.integer :sold_by
      t.integer :purchased_by
      t.float :price

      t.timestamps
    end
  end
end
