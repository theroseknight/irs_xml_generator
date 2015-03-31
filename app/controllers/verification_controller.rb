class VerificationController < ApplicationController
  def build_elements
  	start_time = Time.now
  	#Step 1 - CLear out all elements created by past uploads
  	Element.destroy_all

  	#Step 2 - Create a default folder that all xml files within will be pulled from and verified against past logic
  	xsd_outer_folder_path = Rails.root.join("raw_xml_schemas")

  	#Step 3 - Loop over every folder within the raw_xml_scehmas directory
  	Dir.foreach(xsd_outer_folder_path) do |folder|
  		#NOTE - these two objects are returned by .foreach but are not files that we want to process
  		if folder.to_s != "." && folder.to_s != ".."
	  		xsd_inner_folder_path = Rails.root.join("raw_xml_schemas",folder)
	  		#Step 4 - Loop over every file in the folder
	  		Dir.foreach(xsd_inner_folder_path) do |file|
	  			if file.to_s != "." && file.to_s != ".."
		  			
		  			xsd_file_path = Rails.root.join("raw_xml_schemas",folder,file)
		  			temp_file=File.open(xsd_file_path, "r+")
		  			#Step 5 - Convert the file into a Nokogiri object
						@doc = Nokogiri::XML(temp_file)
						temp_file.close

						#Step 6 - Turn all elements into Active Record objects to be manipulated by the rest of the program
						first_child = @doc.xpath("*")
						VerificationHelpers.create_element_instances(first_child)
					end
				end
		  end
  	end
  	end_time = Time.now
  	final_time = end_time - start_time
  	human_time = VerificationHelpers.dev_output_format(final_time)
  	render json:{time:human_time}
  end

  def no_new_elements
  	start_time = Time.now
  	all_elements = Element.all
  	#Step 7 - Verify that no new elements have been encountered
  	VerificationHelpers.add_new_elements_to_hash(all_elements)
  	
  	end_time = Time.now
  	final_time = end_time - start_time
  	human_time = VerificationHelpers.dev_output_format(final_time)
  	render json:{time:human_time}
  end
	
#End of Verification Class	
end