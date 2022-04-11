class AddDoctorIdToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :doctor_id, :integer
  end
end
