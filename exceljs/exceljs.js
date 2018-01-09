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
  return new Promise((success, fail) => {
    const workbook = new Excel.Workbook()
    const records = []
    let label1 = ''
    let label2 = ''
    let label3 = ''
    let label4 = ''
    let label5 = ''

    workbook.csv.readFile(filename).then(worksheet => {
      // Iterate over each row
      worksheet.eachRow((row, rowNumber) => {
        // console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values))

        // Get the column names
        if (rowNumber === 1) {
          label1 = row.values[1]
          label2 = row.values[2]
          label3 = row.values[3]
          label4 = row.values[4]
          label5 = row.values[5]
        } else if (rowNumber > 1) {
          // Read column values
          records.push({
            [label1]: row.values[1], // Student ID
            [label2]: row.values[2], // First Name
            [label3]: row.values[3], // Last Name
            [label4]: row.values[4], // Mobile
            [label5]: row.values[5] // Email
          })
        }
      })

      success(records)
    })
  })
}

module.exports = {
  writeToCsv,
  readFromCsv
}
