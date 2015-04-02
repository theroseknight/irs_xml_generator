Rails.application.routes.draw do
  get 'verification/build_elements'

  get 'home/index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
    root 'home#index'
    get 'verification/build_elements' => 'verification#build_elements'
    get 'verification/no_new_elements' => 'verification#no_new_elements'
    get 'verification/no_new_attributes' => 'verification#no_new_attributes'
    get 'verification/no_new_required_attributes' => 'verification#no_new_required_attributes'
    get 'verification/all_required_attributes' => 'verification#all_required_attributes'
    get 'verification/no_new_closing_tags' => 'verification#no_new_closing_tags'
    get 'verification/all_required_closing_tags' => 'verification#all_required_closing_tags'
    get 'verification/all_never_closing_tags' => 'verification#all_never_closing_tags'
    get 'verification/no_new_child_relationships' => 'verification#no_new_child_relationships'
    get 'verification/no_new_required_child_relationships' => 'verification#no_new_required_child_relationships'
    get 'verification/all_required_child_relationships' => 'verification#all_required_child_relationships'
  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
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

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
