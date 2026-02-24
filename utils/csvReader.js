// utils/csvReader.js
const fs = require('fs');

function readCsvData(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  // প্রথম লাইন (header) skip করে data rows নেওয়া
  const data = lines.slice(1).map(line => {
    // comma দিয়ে split + trim
    return line.split(',').map(cell => cell.trim());
  });

  // খালি row skip
  return data.filter(row => row.length > 0 && row[0] !== '');
}

module.exports = { readCsvData };