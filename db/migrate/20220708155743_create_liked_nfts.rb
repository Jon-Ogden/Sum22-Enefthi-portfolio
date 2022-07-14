class CreateLikedNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :liked_nfts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :nft_id

      t.timestamps
    end
  end
end
