class LikedNft < ApplicationRecord
  belongs_to :user
  validates :nft_id, uniqueness:{scope: :user_id,
  message: "can only like an NFT once"}


  def self.nft_likes(id)
    find_by_sql ['
    SELECT count(*) FROM liked_nfts
    WHERE nft_id = ?', id]
  end
end
