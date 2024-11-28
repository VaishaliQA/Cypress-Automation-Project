const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const ExcelJs = require('exceljs');
module.exports = defineConfig({
  
  env:{
    url:"https://rahulshettyacademy.com",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM1NjI0M2FlMmFmZDRjMGJiZTQ5NzYiLCJ1c2VyRW1haWwiOiJwcmluY2kxMkBnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjo0MDg1Nzg5MTIzLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzMxNTUxODM4LCJleHAiOjE3NjMxMDk0Mzh9.CGvXd44KcUouI2PbzwUA7KlJ3-J_rInr2KbGT8l2Q2E",
  },
  reporter: 'cypress-mochawesome-reporter',
  projectId: "p1iu8j",
  e2e: {
    
   // watchForFileChanges: false, 
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      // For reporter plucgin
      require('cypress-mochawesome-reporter/plugin')(on);
      // For cucumber setup event
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        browserify(preprendTransformerToOptions(config,browserify.defaultOptions)),
      );
      on('task', {
 
        async writeExcelTest({searchText,replaceText,change,filePath})
         {
             
           const workbook = new ExcelJs.Workbook();
           await workbook.xlsx.readFile(filePath);
           const worksheet = workbook.getWorksheet('Sheet1');
           const output= await readExcel(worksheet,searchText);
         
           const cell = worksheet.getCell(output.row,output.column+change.colChange);
           cell.value = replaceText;
           //pending resolved rejected
           return workbook.xlsx.writeFile(filePath).then(()=>
           {
             return true;
           })
           .catch((error)=>
             {
               return false;
             })
      
         
         }
      
       })
     
      return config  
    },
    specPattern:'cypress/integration/examples/*.js',
    defaultCommandTimeout: 5000,
  },

  
});

async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
