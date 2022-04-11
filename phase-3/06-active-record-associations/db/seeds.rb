puts "Seeding my patients..."
p1 = Patient.create(name: 'Yannik', age: 26, chronic_ailments: "indecisive")
p2 = Patient.create(name: 'Jasmine', age: 32, chronic_ailments: "stressed OUT")
p3 = Patient.create(name: 'Kevawn', age: 27, chronic_ailments: "imposter syndrome")
puts "Patients seeded!"

puts "Seeding some cool doctors..."
d1 = Doctor.create(name: "Doc Oc", specialty: "arms")
d2 = Doctor.create(name: "Doctor Strange", specialty: "time")
d3 = Doctor.create(name: "Doctor Mario", specialty: "pipes")
d4 = Doctor.create(name: "Doctor Robotnik", specialty: "chaos")
puts "Doctors have their PhDs..."

puts "Booking some appts."
Appointment.create(patient_id: p1.id, doctor: d1, time: Date.new)
Appointment.create(patient_id: p1.id, doctor: d3, time: Date.new)
Appointment.create(patient_id: p2.id, doctor: d2, time: Date.new)
Appointment.create(patient_id: p2.id, doctor: d2, time: Date.new)
Appointment.create(patient_id: p2.id, doctor: d2, time: Date.new)
Appointment.create(patient_id: p2.id, doctor: d2, time: Date.new)
Appointment.create(patient_id: p2.id, doctor: d2, time: Date.new)
puts "Appointments created!"

puts "Have a nice day :D"
