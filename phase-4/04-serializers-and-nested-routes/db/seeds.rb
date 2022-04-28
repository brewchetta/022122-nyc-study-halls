puts "seeding..."

VacationSpot.destroy_all
Person.destroy_all

puts "making vacation spots..."
VacationSpot.create!(name: "Dominican Republic", weather: "hot", hours_from_here: 3)
VacationSpot.create!(name: "Phillippines", weather: "warm", hours_from_here: 24)
VacationSpot.create!(name: "Space", weather: "cold", hours_from_here: 1)
VacationSpot.create!(name: "Maldives", weather: "hottest", hours_from_here: 12)

puts "making people..."
Person.create!(name: "Chett")
Person.create!(name: "Octavia")
Person.create!(name: "Ursula")
Person.create!(name: "Daniel")

puts "making vacations..."
Vacation.create!(arrival: "Monday", departure: "Friday", person: Person.first, vacation_spot: VacationSpot.first)
Vacation.create!(arrival: "Tuesday", departure: "Thursday", person: Person.second, vacation_spot: VacationSpot.second)
Vacation.create!(arrival: "Wednesday", departure: "Same day", person: Person.first, vacation_spot: VacationSpot.third)
Vacation.create!(arrival: "Today", departure: "never", person: Person.fourth, vacation_spot: VacationSpot.fourth)

puts "seeding complete!\n"
