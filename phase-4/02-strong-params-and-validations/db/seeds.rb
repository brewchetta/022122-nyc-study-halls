puts "Seeding countries..."
usa = Country.create!(name: "USA", population: 329500000)
greece = Country.create!(name: "Greece", population: 10720000)
colombia = Country.create!(name: "Colombia", population: 50880000)
switzerland = Country.create!(name: "Switzerland", population: 8637000)
ethiopia = Country.create!(name: "Ethiopia", population: 115000000)
india = Country.create!(name: "India", population: 1380000000)
china = Country.create!(name: "China", population: 1402000000)

puts "Seeding citizens and passports...\n"
15.times do
  new_citizen = Citizen.create!(name: Faker::Name.name)
  Passport.create!(citizen: new_citizen, country: Country.all.sample)
end

puts "Seeding complete!"
