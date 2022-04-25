puts "Seeding..."

Season.create!( game: 'ducks', name: "duck season", is_current?: true )
Season.create!( game: 'wabbits', name: "wabbit season", is_current?: true )

puts "Done seeding!"
