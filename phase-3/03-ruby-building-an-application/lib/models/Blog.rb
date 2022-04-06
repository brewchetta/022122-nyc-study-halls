class Blog

  # attributes - title, content, author -> read and write everything EXCEPT author

  attr_accessor :title, :content
  attr_reader :author

  # class variable to store all created blogs
  @@all = []

  def self.all
    @@all
  end

  # CREATE -> title, author, content optional
  # CREATE happens upon creation of the instance a.k.a. initialize

  def initialize(title, author, content='Edit your blog here!')
    # set all the instance variables to the args
    @title = title
    @author = author
    @content = content

    # store blog in all blogs
    @@all << self
  end

  # functionality - create a blog, delete a blog, edit a blog, feature the blog, see all blogs

  # DELETE
  def delete
    @@all.filter! { |b| b != self }
  end

  def pretty_print
    puts "\n$$$$$$$$$$$$$$$$$$$$$$$$"
    # put the title
    puts "Title: " + self.title
    # put the author
    puts "Nom de Plume: " + self.author
    # put the content
    puts self.content
    puts "$$$$$$$$$$$$$$$$$$$$$$$$\n"
  end

end
