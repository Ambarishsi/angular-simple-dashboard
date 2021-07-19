const express = require('express')
const router = express.Router();
const neatCsv = require('neat-csv');
const fs = require('fs')


router.get('/premium', async(req,res) => {
    try{
        fs.readFile('./resources/Data Set - Insurance Client.csv', async (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            res.send(await neatCsv(data))
          })
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router