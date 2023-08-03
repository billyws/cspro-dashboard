import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const interviews = await prisma.listing_record.findMany();
    res.status(200).json(interviews);
  } else {
      res.status(405).json({ message: "Method not allowed" });
  }
}



// Sample output
/* {
  listing_record_id: 99,
  level_1_id: 99,
  sl_cu_type: 43,
  sl_vill_name: 'Papa',
  sl_councilor: 'Morea Arua',
  col1_locality: 'Gunina',
  col2_portion: null,
  col3_lot: null,
  col4_structure_rec_num: 3,
  col5_feature: 1,
  col6_house_type: 4,
  col7_pd_npd_no: 2,
  col8_hh_no: 2,
  col9_further_id_hh_head: 'Kinibo Dagu',
  col10_totpers: 4,
  col10_males: 2,
  col10_females: 2
}, */