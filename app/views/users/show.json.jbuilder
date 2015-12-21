json.extract! current_user, :id, :name, :email, current_user.created_at.strftime("%B %e, %Y")
