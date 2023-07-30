const fs = require('fs');
const archiver = require('archiver');

function createZipFolder(folderPath, zipFilePath) {
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', {
        zlib: { level: 9 } 
    });

    output.on('close', () => {
        console.log(`Successfully created ${zipFilePath}`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
}

const folderPath = './Files'; 
const zipFilePath = './Files.zip'; 

createZipFolder(folderPath, zipFilePath);
