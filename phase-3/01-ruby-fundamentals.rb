require 'pry'

# Welcome to Ruby Fundamentals!

# This is how you do a comment btw

my_variable = "my variable"

# METHOD

def easy_math(number)
  new_var = number * 10000000000
  new_var += 7
  new_var **= 3
  new_var
end

numbers = [1,2,3,4,5,6,7]

puts "numbers: #{numbers}"

plus_one = numbers.map { |num| num + 1 }

j = 0

scope_fun = numbers.map do |num|
  j + num
end

puts scope_fun

puts "numbers object_id: #{numbers.object_id}"
puts "plus_one object_id: #{plus_one.object_id}"

10.times do
  print '.'
  # sleep(0.1)
end

i = 0

while i < numbers.length do

  if numbers[i].even?
    puts numbers[i]
  elsif numbers[i].odd?
    puts "odd number: #{numbers[i]}"
  end

  i += 1

end

# monthly_payment = ((1+(interestRate))**totalMonths)/((1+r)**totalMonths-1)

apple = {
  name: "golden delicious",
  color: "yellow",
  origin: "Colombia",
  taste_good?: false,
  distributor: {
    name: "Costco",
    location: "Red Hook"
  }
}

puts apple[:distributor][:name]

binding.pry
