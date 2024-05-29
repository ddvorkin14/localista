ActiveAdmin.register User do
  permit_params :email, :first_name, :last_name, :age, :country, :address1, :address2, :city, :postalcode, :phone, interest_ids: []
  index do
    selectable_column
    id_column
    column :email
    column :first_name
    column :last_name
    column :age
    column :country
    column :address1
    column :address2
    column :city
    column :postalcode
    column :phone
    column :created_at do |user|
      user.created_at.localtime.strftime('%Y-%m-%d %I:%M %p')
    end
    column :interests do |user|
      user.interests.first(2).map { |interest| interest.name }.join(", ").html_safe + (user.interests.size > 2 ? " +#{user.interests.size - 2} more" : "")
    end
    actions
  end

  show do
    attributes_table do
      row :email
      row :first_name
      row :last_name
      row :age
      row :country
      row :address1
      row :address2
      row :city
      row :postalcode
      row :phone
      row :created_at do |user|
        user.created_at.localtime.strftime('%Y-%m-%d %I:%M %p')
      end
      row :interests do |user|
        user.interests.map { |interest| interest.name }.join(", ").html_safe
      end
    end
    active_admin_comments
  end

end