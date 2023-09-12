# http://url/user/<int:id> :

- Obtiene el usuario con el id del usuario

# http://url/register :

- registra un usuario nuevo
  ejemplo:
  {
  "password":"123456789",
  "name":"admin",
  "country_code":"57",
  "email":"admin@gmail.com",
  "identification_number":"1143878999",
  "phone_number":"3218829300",
  "identification_type":"cedula"
  }

# http://127.0.0.1:8000/login:

ejemplo:
{ "email":"admin@gmail.com","password":"123456789"}
