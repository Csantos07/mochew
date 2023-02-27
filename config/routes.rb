Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'welcome#index'
  get '/welcome', to: 'welcome#index'
  get 'cheat_codes', to: 'welcome#cheat_codes'
  get 'menu', to: 'welcome#menu'
  get 'order', to: 'welcome#order'
  get 'about', to: 'welcome#about'
end
