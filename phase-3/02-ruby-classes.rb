require 'pry'

# 02 Ruby Classes and OOP

# What is Object Oriented Programming?

# Why use Object Oriented Programming?

class VideoGame

  # attr_writer :name, :playtime
  attr_reader :playtime
  attr_accessor :name, :genre

  def initialize(name, playtime)
    @name = name
    @playtime = playtime
    @@all_videogames << self
  end

  # class method

  @@all_videogames = []

  def self.all_videogames
    @@all_videogames
  end

  def self.what_am_i?
    self.class
  end

  # instance method

  def boast
    puts "OMG #{@name} IS SOOOO COOOL! I'VE PLAYED FOR #{@playtime} HOURS!"
  end


  # instance variables

  # SETTER
  # def name=(name)
  #   @name = name
  # end
  #
  def playtime=(playtime)
    if playtime < 10000
      @playtime = playtime
    else
      puts "That's too much time get a life"
    end
  end

  # GETTER
  # def name
  #   @name
  # end

  # def playtime
  #   @playtime
  # end

end

super_mario = VideoGame.new('SUPER MARIO BROS.', 1000)
sonic = VideoGame.new('SONIC', 900)

binding.pry









# What is the difference between an instance and a class?

# How do we create an instance?

# How do we create methods for our instance?

# How can we give our instance properties? How can we access those properties? How can we make them changeable?

# What is a macro?

# How can we give the entire class properties?

# How can we define class methods? What is the scope of a class method or variable? What is the scope of an instance method or variable?

# What is self? How can we leverage self in OOP?

# What is implicit self?
