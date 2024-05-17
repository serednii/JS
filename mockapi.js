const postIdToDelete = 1; // ID поста, який потрібно видалити


const newTask = {
    "userId": 1,
    "title": "delectus aut autem",
    "completed": false
};

fetch('6606a11ebe53febb857e51e7.mockapi.io/todos/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
}).then(res => {
    if (res.ok) {
        return res.json();
    } else {
        console.log('error')
    }
    // handle error
}).then(task => {
    // do something with the new task
}).catch(error => {
    // handle error
    console.log('eeeee' + error)
})


// // fetch('https://<PROJECT_TOKEN.mockapi.io/tasks/1', {
// fetch('https://6606a11ebe53febb857e51e7.mockapi.io/todos/1', {
//     method: 'DELETE',
// }).then(res => {
//     if (res.ok) {
//         return res.json();
//     } else {
//         console.log('error')
//     }

//     // handle error
// }).then(task => {
//     // Do something with deleted task
//     console.log(task)
// }).catch(error => {
//     // handle error
//     console.log(error)
// })

// fetch('https://6606a11ebe53febb857e51e7.mockapi.io/todos', {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
// }).then(res => {
//     if (res.ok) {
//         return res.json();
//     }
//     // handle error
// }).then(tasks => {
//     console.log(tasks)
//     // Do something with the list of tasks
// }).catch(error => {
//     // handle error
// })



console.log('mockapi')