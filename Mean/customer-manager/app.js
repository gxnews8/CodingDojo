//GET
fetch('http://localhost:3000/tasks/')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json: ', json)
  }).catch(function(ex) {
    console.log('parsing failed: ', ex)
  });


//POST
fetch('http://localhost:3000/tasks/', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
       "title":   "Add a blogpost about Angular2",
       "dueDate": "2015-05-23T18:25:43.511Z",
       "done": false
   })
}).then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json: ', json)
    }).catch(function(ex) {
      console.log('parsing failed: ', ex)
    });


//PUT
fetch('http://localhost:3000/tasks/1', { //在url后面指定下id就好
  method: 'put',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
       "done": true
   })
}).then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json: ', json)
    }).catch(function(ex) {
      console.log('parsing failed: ', ex)
    });


//DELETE
fetch('http://localhost:3000/tasks/1', {
method: 'delete'
}).then(function(response) {
   return response.json()
 }).then(function(json) {
   console.log('parsed json: ', json)
 }).catch(function(ex) {
   console.log('parsing failed: ', ex)
 });
