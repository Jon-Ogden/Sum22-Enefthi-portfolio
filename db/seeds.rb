# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Relationship.destroy_all
LikedNft.destroy_all
Sale.destroy_all
Nft.destroy_all
User.destroy_all

u1 = User.create(email:"testing1@test.com", password:"password")
u2 = User.create(email:"testing2@test.com", password:"password")
u3 = User.create(email:"testing3@test.com", password:"password")
u4 = User.create(email:"testing4@test.com", password:"password")

Relationship.create(follower_id:u1.id, followee_id:u2.id)
Relationship.create(follower_id:u1.id, followee_id:u3.id)
Relationship.create(follower_id:u1.id, followee_id:u4.id)

Relationship.create(follower_id:u3.id, followee_id:u1.id)
Relationship.create(follower_id:u4.id, followee_id:u1.id)
Relationship.create(follower_id:u2.id, followee_id:u1.id)

100.times do
    name = Faker::Name.name
    username = Faker::Internet.username
    email = Faker::Internet.free_email
    password = Faker::Internet.password
    image = Faker::Avatar.image
    newUser = User.create(name:name, username:username, email:email, password:password, image:image)
    2.times do
        p = Faker::Commerce.price(range: 1.00..10000.00)
        i = "https://picsum.photos/id/#{rand(1000)}/500"
        d = Faker::ChuckNorris.fact
        t = Faker::Commerce.product_name
        newUser.nfts.create(price:p, image:i, description:d, for_sale:true, creator_id:newUser.id, title:t)
    end
end
