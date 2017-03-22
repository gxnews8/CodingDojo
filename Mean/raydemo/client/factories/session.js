// console.log("hey we in here, we aout");
app.factory("sessionFactory", function($http, $location){
  var factory = {};
  factory.login = function(user){
    $http.post('/login', user).then(function(outpout){
      console.log(output.data);
      if(output.data){
        $location.url('./dash')
      }
    })
  }
  factory.getUser = function(cb){
    $http.get('/getuser').then(function(output){
      cb(output).name;
    })
  }
  return factory
})
