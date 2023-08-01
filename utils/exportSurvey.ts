// TODO: Create a function to export the survey to a file from Survey Solutions API

import axios from 'axios';
import fs from 'fs';
import getAuth from './auth';

// Function to export data
async function exportData(url, path) {
    
    // Get credentials
    const { encodedCredentials } = getAuth();
  try {
    
    // Set headers
    const headers = {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    // Set data
    const data = {
      "ExportType": "Tabular",
      "QuestionnaireId": "string",
      "InterviewStatus": "All",
      "AccessToken": "string",
      "RefreshToken": "string",
      "StorageType": "Dropbox",
      "IncludeMeta": true
    };

    // Make POST request
    const response = await axios.post(url, data, { headers });

    // Check if response is successful
    if (response.status === 200) {
        // Write data to file
      fs.writeFileSync(path, JSON.stringify(response.data, null, 2));
      console.log(`Data exported to ${path}`);
    } else {
      console.log(`Failed to export data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export default exportData;

