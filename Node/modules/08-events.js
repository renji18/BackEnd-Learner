const EventEmitter = require('events')

const event = new EventEmitter()


event.on('sayMyName', () => {
  console.log('your name is vinod');
})

event.on('sayMyName', () => {
  console.log('your name is manod');
})

event.on('sayMyName', () => {
  console.log('your name is ainod');
})

event.emit('sayMyName')

event.on('checkPage', (status, message) => {
  console.log(`status code is ${status} and the page is ${message}`);
})

event.emit('checkPage', 200, 'ok')