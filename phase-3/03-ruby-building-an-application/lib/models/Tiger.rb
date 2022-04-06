class Tiger < Cat

  @@all = []

  def self.all
    @@all
  end

  def initialize(moniker)
    super(name = "Fluffy Dumpling")
    @moniker = moniker
    @reputation = 100
  end

  def meow
    super
    puts '...I mean rawr'
  end

end
