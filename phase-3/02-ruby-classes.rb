require 'pry'

# 02 Ruby Classes and OOP

# What is Object Oriented Programming?

# Why use Object Oriented Programming?

# What is the difference between an instance and a class?

# How do we create an instance?

# How do we create methods for our instance?

# How can we give our instance properties? How can we access those properties? How can we make them changeable?

# What is a macro?

# How can we give the entire class properties?

# How can we define class methods? What is the scope of a class method or variable? What is the scope of an instance method or variable?

# What is self? How can we leverage self in OOP?

# What is implicit self?

class VideoGame

  attr_reader :playtime
  attr_accessor :name, :genre

  # GETTER / READER
  # def name
  #   @name
  # end

  # def playtime
  #   @playtime
  # end

  # SETTER / WRITER
  # def name=(name)
  #   @name = name
  # end

  # example of a custom setter
  def playtime=(playtime)
    if playtime < 10000
      @playtime = playtime
    else
      puts "That's too much time get a life"
    end
  end

  # INITIALIZE - fires when someone uses VideoGame.new(name, playtime)

  def initialize(name, playtime)
    @name = name
    @playtime = playtime
    @@all_videogames << self
  end

  # EXAMPLE INSTANCE METHOD

  def boast
    puts "OMG #{@name} IS SOOOO COOOL! I'VE PLAYED FOR #{@playtime} HOURS!"
  end

  # CLASS METHODS / VARIABLES

  @@all_videogames = []

  def self.all_videogames
    @@all_videogames
  end

  def self.what_am_i?
    self.class
  end

end

super_mario = VideoGame.new('SUPER MARIO BROS.', 1000)
sonic = VideoGame.new('SONIC', 900)

binding.pry
