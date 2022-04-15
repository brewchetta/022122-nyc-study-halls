puts "Seeding file...\n"

print "Creating albums."
a1 = Album.create!(title: "Come Fly With Me", year: 1958)
print "."
a2 = Album.create!(title: "Ring-a-Ding Ding!", year: 1960)
puts ".\n"

print "Creating songs."
a1.songs.create!(title: "Come Fly With Me", playtime_in_seconds: 199)
print "."
a1.songs.create!(title: "Around The World", playtime_in_seconds: 201)
print "."
a1.songs.create!(title: "Isle Of Capri", playtime_in_seconds: 149)
print "."
a1.songs.create!(title: "Moonlight In Vermont", playtime_in_seconds: 212)
print "."
a1.songs.create!(title: "Autumn In New York", playtime_in_seconds: 276)
print "."
a1.songs.create!(title: "On The Road To Mandalay", playtime_in_seconds: 210)
print "."
a1.songs.create!(title: "Let's Get Away From It All", playtime_in_seconds: 131)
print "."
a1.songs.create!(title: "April In Paris", playtime_in_seconds: 171)
print "."
a1.songs.create!(title: "London By Night", playtime_in_seconds: 211)
print "."

a2.songs.create!(title: "Ring-A-Ding Ding", playtime_in_seconds: 166)
print "."
a2.songs.create!(title: "Let's Fall in Love", playtime_in_seconds: 133)
print "."
a2.songs.create!(title: "Be Careful, It's My Heart", playtime_in_seconds: 126)
print "."
a2.songs.create!(title: "A Foggy Day", playtime_in_seconds: 138)
print "."
a2.songs.create!(title: "A Fine Romance", playtime_in_seconds: 133)
print "."
a2.songs.create!(title: "In the Still of the Night", playtime_in_seconds: 206)
print "."
a2.songs.create!(title: "The Coffee Song", playtime_in_seconds: 173)
print "."
a2.songs.create!(title: "When I Take My Sugar To Tea", playtime_in_seconds: 126)
print "."
a2.songs.create!(title: "Let's Face The Music And Dance", playtime_in_seconds: 179)
puts ".\n"

puts "🎶 Seeding complete! 🎶"
