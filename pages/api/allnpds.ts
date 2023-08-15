
import exportSurvey from "../../utils/exportSurvey";


export default async function handler(req, res) {
    const exportData = await exportSurvey("http://45.63.29.103/npd/api/v2/export");
    const npdData = res.status(200).json(exportData);

    console.log(npdData);
    
}