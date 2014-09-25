crypto = require 'crypto'
int64 = require './index.js'

times = process.argv[2]
number = process.argv[3]
numbers = []

main = (err, buf)->
  if number
    numbers.push number
  else
    numbers.push buf.toString('hex')
  if numbers.length >= times
    time = process.hrtime()
    console.log 'begin bench'
    for i in [0...times]
      a = int64(numbers[i])
    time1 = process.hrtime()
    total = (time1[0] - time[0]) * 1000000000 + time1[1] - time[1]
    console.log 'done'
    console.log "total #{Math.round(total/10000)/100} ms"
    console.log "average #{Math.round(total/times/10)/100} microsec"
    console.log a

console.log "#{times} randmoize hexcodes generating..."
for i in [0...times]
  crypto.randomBytes 8, main
