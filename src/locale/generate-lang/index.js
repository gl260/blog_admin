const xlsx = require("xlsx");
const fs = require("fs");

const args = process.argv.slice(2);
const filePath = args[0];

const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const json = xlsx.utils.sheet_to_json(worksheet);
json.splice(0, 1);

let zhJson = {},
  enJson = {},
  jaJson = {};
for (let i = 0; i < json.length; i++) {
  let item = json[i];
  if (item["KEY"]) {
    zhJson[item["KEY"]] = item["中文"];
    enJson[item["KEY"]] = item["英文"];
    jaJson[item["KEY"]] = item["日语"];
  }
}

fs.writeFile("./src/locale/zh.json", JSON.stringify(zhJson), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("zh.json has been created!");
  }
});

fs.writeFile("./src/locale/en.json", JSON.stringify(enJson), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("en.json has been created!");
  }
});

fs.writeFile("./src/locale/ja.json", JSON.stringify(jaJson), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("ja.json has been created!");
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("lang file has been deleted!");
      }
    });
  }
});
