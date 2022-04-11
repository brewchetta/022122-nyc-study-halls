class Car < ActiveRecord::Base

  def pretty_print
    self.model + ' ' + self.name
  end

end
