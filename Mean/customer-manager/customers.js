//customers.js
var faker = require('faker')

function generateCustomers () {
  var customers = []

  for (var id = 0; id < 5000; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()

    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber
    })
  }

  return { "customers": customers }
}

module.exports = generateCustomers
