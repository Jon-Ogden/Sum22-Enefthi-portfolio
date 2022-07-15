class LikedNft < ApplicationRecord
  belongs_to :user

  def self.nft_likes(id)
    find_by_sql ['
    SELECT count(*) FROM liked_nfts
    WHERE nft_id = ?', id]
  end
end
