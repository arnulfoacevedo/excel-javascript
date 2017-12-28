const Excel = require('exceljs')

// Write CSV Files
const writeToCsv = (filename, sheetName) => {
  const workbook = createAndFillWorkbook(sheetName)
  workbook.csv.writeFile(filename)
    .then( () => {
      // Done
      console.log('Done')
    })
}

// Create a Workbook and a sheet then fill it with data
const createAndFillWorkbook = (sheetName) => {
  const workbook = new Excel.Workbook()
  const sheet = workbook.addWorksheet(sheetName);

  // Create Column Names
  sheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
  ]
  // Create Row Data
  sheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
  sheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
  sheet.addRow([3, 'Sam', new Date()]);
  // Create Row Data using Array
  const rows = [
    [4,'Bob',new Date()], // row by array
    {id:5, name: 'Barbara', dob: new Date()}
  ];
  sheet.addRows(rows);

  return workbook
}

writeToCsv('test.csv', 'My Sheet')


// Read CSV Files