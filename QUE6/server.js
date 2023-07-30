const fs = require('fs');
const unzipper = require('unzipper');

async function extractZip(zipFilePath, extractToPath) {
    try {
        const stream = fs.createReadStream(zipFilePath);
        await stream.pipe(unzipper.Extract({ path: extractToPath }));
        console.log('Extraction complete.');
    } catch (err) {
        console.error('Error extracting the zip file:', err);
    }
}

const zipFilePath = './Files.zip'; 
const extractToPath = './Files'; 

extractZip(zipFilePath, extractToPath);
