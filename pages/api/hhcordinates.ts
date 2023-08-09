import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const hhCordinates = await prisma.metadata_record.findMany();
    res.status(200).json(hhCordinates);
  } else {
      res.status(405).json({ message: "Method not allowed" });
  }
}

// Sample output
/*
{
"metadata_record_id": 1,
"level_1_id": 1,
"s_interviewer_code": "f8839395-39da-45c0-b1fd-8beedf5977c9",
"s_supervisor_code": "1c8dc879-991d-463a-aa94-7089a5b72dd2",
"s_start_interview_time": "1689900077",
"s_end_interview_time": "1689900077",
"s_program_publish_date": "20230721101220",
"s_house_type": null,
"s_gps_reading": "3",
"s_gps2_reading": "3",
"s_gps3_reading": "3",
"s_gps_latitude": null,
"s_gps_longitude": null,
"s_gps_altitude": null,
"s_gps_accuracy": null,
"s_gps_satellites": null,
"s_gps_readtime": null,
"s_gps2_latitude": null,
"s_gps2_longitude": null,
"s_gps2_altitude": null,
"s_gps2_accuracy": null,
"s_gps2_satellites": null,
"s_gps2_readtime": null,
"s_gps3_latitude": null,
"s_gps3_longitude": null,
"s_gps3_altitude": null,
"s_gps3_accuracy": null,
"s_gps3_satellites": null,
"s_gps3_readtime": null,
"sl_introduction": "1",
"npdef_data_capture_method": null,
"npdef_instruction": null,
"npdef_total": null,
"csf_data_capture_method": null,
"csf_instruction": null,
"csf_ref_no": null,
"hh_introduction": null,
"hh_population_section": null,
"hh_conclusion_section": null,
"intvw_result_control": null,
"hh_conclusion": "1"
},
*/