import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const interviewResults = await prisma.level_1.findMany();
    res.status(200).json(interviewResults);
  } else {
      res.status(405).json({ message: "Method not allowed" });
  }
}

// sample output
/*
{
"level_1_id": 1,
"case_id": "00a92129-bc65-4424-a8d5-c87a76d66d3b",
"s_province": "5",
"s_district": "1",
"s_llg": "7",
"s_ward": "80",
"s_cu": "3",
"s_wl": "1",
"s_record": "157"
},
*/