class Membership < ApplicationRecord
  belongs_to :gym
  belongs_to :client

  validate :only_has_one_membership_with_gym

  def only_has_one_membership_with_gym
    if Membership.find_by(client_id: self.client_id, gym_id: self.gym_id)
      errors.add(:client, "#{self.client.name} already has a membership at this Gym")
    end
  end

end
