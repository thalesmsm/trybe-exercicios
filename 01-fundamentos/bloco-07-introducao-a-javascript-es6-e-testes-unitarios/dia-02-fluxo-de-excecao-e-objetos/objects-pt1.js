const customer = {
  firstName: 'Roberto',
  age: 27,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
// console.log(customer);

const add = (obj, key, value) => obj[key] = value;


add(customer, 'naturalidade', 'Brasil');
add(customer, 'nascimento', '24/12/1994');
add(customer, 'estadoCivil', 'Solteiro');

console.log(customer);
