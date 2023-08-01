clear
insheet using "pngStructuralListing.tab", tab case names

label variable interview__id `"Unique 32-character long identifier of the interview"'

label variable interview__key `"Interview key (identifier in XX-XX-XX-XX format)"'

label variable assignment__id `"Assignment id (identifier in numeric format)"'

label variable sssys_irnd `"Random number in the range 0..1 associated with interview"'

label variable has__errors `"Errors count in the interview"'

label define interview__status 0 `"Restored"' 20 `"Created"' 40 `"SupervisorAssigned"' 60 `"InterviewerAssigned"' 65 `"RejectedBySupervisor"' 80 `"ReadyForInterview"' 85 `"SentToCapi"' 95 `"Restarted"' 100 `"Completed"' 120 `"ApprovedBySupervisor"' 125 `"RejectedByHeadquarters"' 130 `"ApprovedByHeadquarters"' -1 `"Deleted"' 
label values interview__status interview__status
label variable interview__status `"Status of the interview"'

label variable referenceCode `"reference_code"'

label variable pictNIF `"picture_NIF"'

label variable npd_address `"npd_address"'

label variable location `"location"'

label variable section `"section"'

label variable lot `"lot"'

label variable ownerName `"ownerName"'

label variable contact_person `"contact_person"'

label variable person_title `"contact person title"'

label variable contact_num `"contact_num"'

label variable contact_email `"contact_email"'

label variable contact_facsimile `"contact_facsimile"'

label variable cooking_arragement `"cooking_arragement"'

label variable totalBlocks `"total_blocks"'

label variable totalRooms `"total_rooms"'

label variable personPerRooms `"person_per_rooms"'

label variable totalBeds `"total_Beds"'

label variable totalPerson `"totalPerson"'
