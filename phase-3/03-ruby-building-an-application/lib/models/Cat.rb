class Cat

  @@all = []

  def self.all
    @@all
  end

  def initialize(name)
    @name = name
    @reputation = 20
    @@all << self
  end

  def jump
    'jump!'
  end

  def meow
    puts 'mrow'
  end

  def stretch
    'stretching and yawning'
  end

  def fits_and_sits
    'I fits I sits'
  end

  def shed
    'hair everywhere'
  end

end
