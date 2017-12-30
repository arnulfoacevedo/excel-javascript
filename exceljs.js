const Excel = require('exceljs')

// Write CSV Files
const writeToCsv = (filename, sheetName, columns, data) => {
  const workbook = createAndFillWorkbook(sheetName, columns, data)
  workbook.csv.writeFile(filename).then(() => {
    // Done
    console.log('Done')
  })
}

// Create a Workbook and a sheet then fill it with data
const createAndFillWorkbook = (sheetName, columns, data) => {
  const workbook = new Excel.Workbook()
  const sheet = workbook.addWorksheet(sheetName)

  // Create Column Names
  sheet.columns = columns

  // Create Row Data using Array
  sheet.addRows(data)

  return workbook
}

// Read CSV Files
const readFromCsv = filename => {
  const workbook = new Excel.Workbook()
  workbook.csv.readFile(filename).then(worksheet => {
    // Iterate over each row
    worksheet.eachRow((row, rowNumber) => {
      console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values))
    })
  })
}

module.exports = {
  writeToCsv,
  readFromCsv
}
