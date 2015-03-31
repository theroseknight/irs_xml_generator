namespace :db do
  task :load_clients=>:environment do
    require 'tiny_tds'
    client = TinyTds::Client.new username: 'dbro', password: 'dbsysadmin@2699', host: 'mssql'
    result = client.execute("SELECT * FROM tblClient")
    counter=0
    entities=[]
    result.each do |row|
      # By default each row is a hash.
      client={}
      client["entity_kro_number"]=row["ClientRef"]
      client["entity_name"]=row["SearchName"]
      entities.push(client)
    end
    entities.each do |entity|
      if Entity.find_by(entity_name:entity["entity_name"])
      else
        Entity.create(entity_name:entity["entity_name"],entity_kro_number:entity["entity_kro_number"])
      end
    end
  end
end
