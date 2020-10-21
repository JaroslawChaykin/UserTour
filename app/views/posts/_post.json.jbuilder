json.extract! post, :id, :author, :title, :content, :timeBypass, :price, :created_at, :updated_at
json.url post_url(post, format: :json)
