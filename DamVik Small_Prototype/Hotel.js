const E = require('express')
const exp = new E()
const fs = require('fs')
exp.use(E.static('./public'))
exp.get('/Home', (req, res) => {
  const t = fs.readFileSync('./Home.html', 'utf-8')
  res.end(t)
})
exp.use(E.urlencoded({ extended: false }))
let V = 1
exp.post('/submit', (req, res) => {
//   console.log(req.body.Name)
//     console.log(req.body.Mobno)
  const N = req.body.Name
  const M = req.body.Mobno

  const Newc = '   ' + V + '. Please call Mr/Ms :' + N + ' at his/her Mobile :' + M + '\n'
  fs.appendFileSync('Customer_call.txt', Newc)
  V++
  res.end('You Will recieve a Call Shortly....Thank You')
})
let V2 = 1
exp.post('/submit_Order', (req, res) => {
  //   console.log(req.body.Name)
  //     console.log(req.body.Mobno)
  const N = req.body.Name
  const M = req.body.Mobno
  const nor = req.body.NoofRoom
  const t = req.body.Room_type
  const chin = req.body.Checkin
  const chout = req.body.Checkout

  const Newc = '   ' + V2 + '. Please Give  Mr/Ms :' + N + ' , ' + nor + ' rooms at his/her Mobile :' + M + ' of ' + t + ' type from ' + chin + ' to ' + chout + ' period.\n'
  fs.appendFileSync('Customer_Order.txt', Newc)
  V2++
  res.end('You Order is Successfull....Thank You')
})
exp.listen(5000)
