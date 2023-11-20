import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Enter your url: ",
      name: "URL" 
    }
  ])
  .then((answers) => {
    var url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    console.log("qr image generated successfully!");
    fs.writeFile("url.txt", url, (err)=>{
      if(err) throw err;
      console.log("url name saved successfully!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });