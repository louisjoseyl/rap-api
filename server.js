const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
  '21 savage': {
    'age': 28,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'chance the rapper': {
    'age': 27,
    'birthName': 'Chancellor Jonathan Bennett',
    'birthLocation': 'Chicago, Illinios'
  },
  'unknown': {
    'age': 28,  
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/', (req, res) => {
  console.log(rappers);
    res.json(rappers)
})
app.get('/api/rappers/:rapperName', (req, res) => {
  const rapName = req.params.rapperName.toLowerCase()
  console.log(rapName);
  if (rappers[rapName]) {
    res.json(rappers[rapName])
  }else{
    res.json(rappers["unknown"])
  }
})

app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT} ...`)
})

