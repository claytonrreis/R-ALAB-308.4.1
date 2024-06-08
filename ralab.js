// Steps 1 & 2
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,QuizMaster,58\n98,Bill,Doctor’s Assistant,26";
const newArray = csv.split("\n");

console.log(newArray);

// Steps 3 & 4
const dataArray = [];

for (let i = 0; i < newArray.length; i++) {
  const row = newArray[i].split(",");
  dataArray.push(row);
}

console.log(dataArray);

// Steps 5, 6, 7 & 8

const cellHeaders = [];
for (let i = 0; i < dataArray[0].length; i++) {
  cellHeaders.push(dataArray[0][i]);
}

console.log(cellHeaders);

//steps 9,10 & 11

const objectArray = [];

for (let i = 1; i < dataArray.length; i++) {
  const row = dataArray[i];
  const object = {};
  for (let j = 0; j < row.length; j++) {
    const cellInfo = row[j];
    object[cellHeaders[j]] = cellInfo;
  }
  objectArray.push(object);
}

// Step 12
console.log(objectArray);
