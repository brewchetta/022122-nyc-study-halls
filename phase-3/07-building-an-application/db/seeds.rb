puts "making some 'dope' 'socks'..."

100.times do

  new_sock = Sock.create(
    brand: Faker::Cannabis.brand,
    sock_type: Faker::Cannabis.type,
    is_comfortable?: true,
    sock_drawer_id: SockDrawer.all.sample.id
  )

  puts "Create #{new_sock.brand} #{new_sock.sock_type}..."

end

puts "Seeded all 'socks'..."
