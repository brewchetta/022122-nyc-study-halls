class App

  attr_accessor :input

  def run
    self.main_menu
  end

  def main_menu
    puts '################################################'
    puts "Are you READY for 🤖 to create your BLOG???????"
    puts "2. Create blog post"
    puts "3. View blog posts"
    puts "4. EXIT"
    puts '################################################'

    self.get_user_input
    self.select_option
  end

  def get_user_input
    print "Please choose an option: "
    @input = gets.chomp.strip
  end

  def select_option
    case self.input
    when '2' then self.create_blog_post
    when '3' then self.list_blog_posts
    when '4' then exit_app
    else
      puts '### Please choose 1-5! ###'
      get_user_input
      select_option
    end
  end

  def create_blog_post
    # gets to see what the person wants to type in
    print 'What is your title?: '
    title = gets.chomp.strip

    print 'What is your nom de plume?: '
    author = gets.chomp.strip

    print 'What would you like to let the world know about? Sacre bleu!!!!: '
    content = gets.chomp.strip

    new_blog = Blog.new(title, author, content)

    new_blog.pretty_print

    main_menu
  end

  def list_blog_posts
    Blog.all.each { |blog| blog.pretty_print }
    main_menu
  end

  def exit_app
    puts '\nOk byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
    exit
  end

end
