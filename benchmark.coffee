crypto = require 'crypto'
int64 = require './index.2.js'
str2int64 = int64.stringToInt64

times = process.argv[2]
number = process.argv[3]
numbers = []

main = (err, buf)->
  if number
    numbers.push number
  else
    numbers.push buf.toString('hex')
  if numbers.length >= times
    res = [];
    time = process.hrtime()
    console.log 'begin int2str bench'
    res.push(int64(numbers[i])) for i in [0...times]
    time1 = process.hrtime()
    total = (time1[0] - time[0]) * 1000000000 + time1[1] - time[1]
    console.log 'done'
    console.log "total #{Math.round(total/10000)/100} ms"
    console.log "average #{Math.round(total/times/10)/100} microsec"
    console.log '-----------'

    console.log 'begin str2int bench'
    for i in [0...times]
      throw new Error "transback fail #{numbers[i]} #{str2int64 res[i]}" unless numbers[i] is str2int64 res[i]
    time1 = process.hrtime()
    total = (time1[0] - time[0]) * 1000000000 + time1[1] - time[1]
    console.log 'done'
    console.log "total #{Math.round(total/10000)/100} ms"
    console.log "average #{Math.round(total/times/10)/100} microsec"


console.log "#{times} randmoize hexcodes generating..."
for i in [0...times]
  crypto.randomBytes 8, main
