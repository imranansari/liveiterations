Liveiterations::Application.routes.draw do
  get "storymap/index"
  get "storymap/test"
  get "storymap/activity"

  match 'storymap/activity', :to => 'storymap#newActivity', format: :json
  match 'storymap/activity/:id', :to => 'storymap#updateActivity',  format: :json, :via => :post
  match 'storymap/activity/:id', :to => 'storymap#updateActivity',  format: :json, :via => :put
  match 'storymap/task/:id', :to => 'storymap#updateTask',  format: :json, :via => :put
  match 'storymap/task/:id', :to => 'storymap#deleteTask',  :via => :delete
  match 'storymap/activity/:id', :to => 'storymap#deleteActivity',  :via => :delete


  get "message/index"
  match 'message', :to => 'message#new', format: :json, :via => :post
  match 'message', :to => 'message#list', format: :json, :via => :get


  get 'mytest/testcollectionview'

  get "project/index"
  get "project/components"
  get "project/profile"

  resources :projects

  get "sp/components"
  get "sp/index"
  match 'sp', :to => 'sp#list', format: :json, :via => :get


  match 'project', :to => 'project#list', format: :json, :via => :get
  match 'project', :to => 'project#new', format: :json, :via => :post
  match 'project', :to => 'project#update', format: :json, :via => :put
  match 'project', :to => 'project#delete', format: :json, :via => :delete

  match 'project/savesession', :to => 'project#savesession', format: :json, :via => :get



  #get \"users\/show\"

  root :to => "home#index"

  devise_for :users
  resources :users, :only => :show

  match 'users', :to => 'users#list', format: :json, :via => :get


  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'


  #get "storymap/display"

end
