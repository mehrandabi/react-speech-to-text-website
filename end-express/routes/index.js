var express = require('express');
var path = require('path');
var splitFile = require('split-file');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Upload Your File!'
  });
});
router.post('/get-file', function(req, res, next) {

  var sampleFile = req.files.sampleFile;

  //get the extension of the file
  var extension = path.extname(sampleFile.name);

  //move the files
  sampleFile.mv('./uploaded-file/uploaded.mp3', function(err) {
    //handle errors
    if (err) {
      console.log(err);
      res.render('error', {
        message: 'There Were Some Errors Uploading the File'
      });
    }

    //check file's extension
    if(extension!='.mp3')
      res.render('error', { message: 'The File Must be an Image File' });

    //split the file
    splitFile.splitFileBySize('./uploaded-file/uploaded.mp3', 100000)
      .then((names) => {
        var result = '';
        names.forEach((item,index)=>{
          result += "path[" + index + "] =" + item + "<br>";
        })
        res.send(result);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

  });

  //split the file
  splitFile.splitFileBySize('./uploaded-file/uploaded.jpg', 100000)
    .then((names) => {
      console.log(names);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});

module.exports = router;
