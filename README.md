# Node Exceljs
This is an app that uses the `exceljs` package to create or read CSV files

## writeToCSV
```javascript
// Array of column names
columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 32 },
  { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
]

// Array of data rows
data = [
  { id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) },
  { id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) },
  [3, 'Sam', new Date()],
  [4, 'Bob', new Date()], // row by array
  { id: 5, name: 'Barbara', dob: new Date() }
]

// Write to CSV File
writeToCsv ( 'filename.csv', 'sheet name', columns, data )
```

## readFromCSV
```javascript
readFromCsv ( 'filename.csv' )
```
