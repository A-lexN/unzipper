const fs = require('fs');
const AdmZip = require('adm-zip');

// Set the path to the folder containing the archive files
const archiveFolder = './folder/with/zip/files';

// Set the path to the folder where you want to extract the archives
const extractFolder = './folder/with/extract/files';

// Get an array of all the files in the archive folder
const archiveFiles = fs.readdirSync(archiveFolder);

// Loop through each file in the archive folder
for (const archiveFile of archiveFiles) {
  // Get the name of the folder to extract to (by removing the file extension)
  const extractName = archiveFile.split('.').slice(0, -1).join('.');

  // Create the folder to extract to (if it doesn't already exist)
  fs.mkdirSync(`${extractFolder}/${extractName}`, { recursive: true });

  // Extract the archive to the new folder
  const zip = new AdmZip(`${archiveFolder}/${archiveFile}`);
  zip.extractAllTo(`${extractFolder}/${extractName}`, true);
}
