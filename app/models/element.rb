class Element < ActiveRecord::Base
	def known_element_types
		return [
			"xsd:schema",
			"xsd:annotation",
			"xsd:documentation",
			"xsd:include",
			"xsd:element",
			"xsd:complexType",
			"xsd:complexContent",
			"xsd:extension",
			"xsd:attributeGroup",
			"xsd:attribute",
			"xsd:sequence",
			"xsd:choice",
			"xsd:simpleType",
			"xsd:restriction",
			"xsd:enumeration",
			"xsd:simpleContent",
			"xsd:pattern",
			"xsd:maxLength",
			"xsd:list",
			"xsd:totalDigits",
			"xsd:fractionDigits",
			"xsd:description",
			"Description",
			"TaxYear",
			"MaturityLevel",
			"ReleaseDate",
			"LineNumber",
			"ELFFieldNumber",
			"Purpose"
		]
	end

end