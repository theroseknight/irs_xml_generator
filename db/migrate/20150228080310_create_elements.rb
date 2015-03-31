class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
    	t.string :name
    	t.text :xml_body

      t.timestamps null: false
    end
  end
end
