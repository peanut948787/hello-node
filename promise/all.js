let job1 = doWork("first")
let job2 = doWork("second")
let job3 = doWork("third")

Promise.all([job1, job2, job3])
    .then(()=>{})
    .catch(()=>{})