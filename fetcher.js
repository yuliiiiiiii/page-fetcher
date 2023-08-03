const request = require('request'); //request is to make HTTP connection
const fs = require('fs'); //fs is to read and write files
const paths = process.argv.slice(2);

const findSize = () => fs.statSync(paths[1]).size; //use fs to find the size of a file

request(paths[0], (error, response, body) => {
  if(error) {
    console.log(response && response.statusCode);
  }
  fs.writeFile(paths[1], body, (error) => {
   if(error) {
    console.log('Opps an erroe');
   } else {
    const stats = findSize()
    console.log(`Downloaded and saved ${stats} bytes to ${paths[1]}`)
   }
  });
});
