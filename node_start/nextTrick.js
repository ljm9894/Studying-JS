setImmediate(()=>{
    console.log('immediate');
});
process.nextTick(()=>{
    console.log('nextTick');
});
setTimeout(()=>{
    console.log('time out');
},0);
Promise.resolve().then(()=> console.log('promise'));