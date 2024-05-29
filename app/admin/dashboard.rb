# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    # Here is an example of a simple dashboard with columns and panels.
    #
    columns do
      column do
        panel "Recent Users" do
          ul do
            User.last(10).map do |user|
              li link_to("#{user.email} (created at: #{user.created_at.localtime.strftime('%Y-%m-%d %I:%M %p')})", user_path(user))
            end
          end
        end

        panel "Recent Interests" do
          ul do
            Interest.last(10).map do |interest|
              li link_to("#{interest.name} (created at: #{interest.created_at.localtime.strftime('%Y-%m-%d %I:%M %p')})", admin_interest_path(interest))
            end
          end
        end
      end
    
      column do
        panel "Info" do
          para "Welcome to ActiveAdmin."
        end
      end
    end
  end # content
end
