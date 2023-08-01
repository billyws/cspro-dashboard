// TODO: Create a function to export the survey to a file from Survey Solutions API

import axios from 'axios';
import fs from 'fs';
import getAuth from './auth';

// Function to export data
async function exportSurvey(url) {
    
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
      "From": "2023-08-01T18:02:48.114Z",
      "To": "2023-08-01T18:02:48.114Z",
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
      console.log(`Data exported successfully. Status code: ${response.status}`);
    } else {
      console.log(`Failed to export data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export default exportSurvey;

