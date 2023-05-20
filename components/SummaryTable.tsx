
const data = [
      {
        "province": "Central",
        "progress": 75,
        "household_count": 5000,
        "person_count": 15000,
        "male_count": 7500,
        "female_count": 7500
      },
      {
        "province": "Chimbu",
        "progress": 50,
        "household_count": 3000,
        "person_count": 9000,
        "male_count": 4500,
        "female_count": 4500
      },
      {
        "province": "Eastern Highlands",
        "progress": 65,
        "household_count": 4500,
        "person_count": 13500,
        "male_count": 6750,
        "female_count": 6750
      },
      {
        "province": "East New Britain",
        "progress": 85,
        "household_count": 5500,
        "person_count": 16500,
        "male_count": 8250,
        "female_count": 8250
      },
      {
        "province": "East Sepik",
        "progress": 30,
        "household_count": 2000,
        "person_count": 6000,
        "male_count": 3000,
        "female_count": 3000
      },
      {
        "province": "Enga",
        "progress": 60,
        "household_count": 4000,
        "person_count": 12000,
        "male_count": 6000,
        "female_count": 6000
      },
      {
        "province": "Gulf",
        "progress": 40,
        "household_count": 2500,
        "person_count": 7500,
        "male_count": 3750,
        "female_count": 3750
      },
      {
        "province": "Hela",
        "progress": 55,
        "household_count": 3500,
        "person_count": 10500,
        "male_count": 5250,
        "female_count": 5250
      },
      {
        "province": "Jiwaka",
        "progress": 70,
        "household_count": 4800,
        "person_count": 14400,
        "male_count": 7200,
        "female_count": 7200
      },
      {
        "province": "Madang",
        "progress": 75,
        "household_count": 5000,
        "person_count": 15000,
        "male_count": 7500,
        "female_count": 7500
      },
      {
        "province": "Manus",
        "progress": 90,
        "household_count": 6000,
        "person_count": 18000,
        "male_count": 9000,
        "female_count": 9000
      },
      {
        "province": "Milne Bay",
        "progress": 70,
        "household_count": 4800,
        "person_count": 14400,
        "male_count": 7200,
        "female_count": 7200
      },
      {
        "province": "Morobe",
        "progress": 80,
        "household_count": 5300,
        "person_count": 15900,
        "male_count": 7950,
        "female_count": 7950
      },
        {
        "province": "New Ireland",
        "progress": 75,
        "household_count": 5000,
        "person_count": 15000,
        "male_count": 7500,
        "female_count": 7500
        },
        {
        "province": "Oro",
        "progress": 75,
        "household_count": 5000,
        "person_count": 15000,
        "male_count": 7500,
        "female_count": 7500
        },
    ]
     
  
interface Data {
    province: string;
    progress: number;
    household_count: number;
    person_count: number;
    male_count: number;
    female_count: number;
    
}

export default function SummaryTable(){
    return(
        <div className="overflow-x-auto">
            <table className="nsotable nsotable-compact w-full">
                <thead>
                <tr>
                    <th></th> 
                    <th>Province</th> 
                    <th>Household</th> 
                    <th>Total</th> 
                    <th>Male</th> 
                    <th>Female</th>
                    <th>Progress</th> 
                </tr>
                </thead> 
                <tbody>
                {data.map((data: Data) => (
                    <tr key={data.province}>
                        <td></td>
                        <td>{data.province}</td>
                        <td>{data.household_count}</td>
                        <td>{data.person_count}</td>
                        <td>{data.male_count}</td>
                        <td>{data.female_count}</td>
                        <td>{data.progress}%</td>
                        </tr>
                ))}
                </tbody> 
            </table>
    </div>
    )
}