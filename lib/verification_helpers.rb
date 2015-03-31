module VerificationHelpers

	#Used on Time.now math to make a clean visual looking number that is used as part of a developer report in console detailing the speed of each step of the process.
  def self.dev_output_format(number)
    if number.to_s.include?("e")
      return "0.0"
    else
      return number.to_s.slice(/[0-9]*[.][0-9]{2}/).to_s + " seconds"
    end
  end

	#This function takes in an entire file converted to a Nokogiri object and turns all of its children elements into Active Record Element instances
	def self.create_element_instances(nokogiri_node)
		if nokogiri_node.count != 0
			nokogiri_node.each do |node_child|
				puts node_child
				#create the element object here
				xml_string = nokogiri_node.to_s
				raw_tag = xml_string.match(/<[^\s>]*/).to_s
				tag_name = raw_tag[1..-1]
				Element.create(
					name: tag_name,
					xml_body: xml_string
				)
				new_nokogiri_node = node_child.xpath("*")
				#Recursive call that terminates when the return count == 0				
				create_element_instances(new_nokogiri_node)
			end
		end
	end

	#Takes in an array of elements as an argument and check for any new elements. It infors you a new element is present if found
	def self.add_new_elements_to_hash(array)
		array.each do |blank_element_name|
			if blank_element_name.known_element_types.include?(blank_element_name.name) == false
				puts "#{@xsd_file_name} file contains new element #{blank_element_name.name}"
				aaa
			end
		end
	end


#End Module
end