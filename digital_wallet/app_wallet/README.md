APIS:

http://url/api/v1/saldo/<int:id>
Displays the user's balance, along with the user's name and identificaction_number.
ejemplo de retorno:
{
"balance": "510000.00",
"user**name": "queen",
"user**uuid_user": "f01feaa2-277f-4617-b395-683436288f1b"
}

http://url/api/v1/pago/<int:id>
Performs data entry and deducts from the user's balance.
{"amount": "40000" , "details": "pago de factura", "transaction_type": "pago", "user": 1 }

http://url/api/v1/recarga/
sends the identification number and the value to recharge to the user, this would be an api used by an external entity to recharge the user's wallet.
{"reload": 20000, "identification": "123456790" }

http://url/api/v1/retiro/ : envia una solicitud de retiro y devuelve un codigo de validacion de 6 digitos
ejemplo de envio:

{"identification_number": "1143878993","value": 50000}

dependencies:

Django==4.2.4
djangorestframework==3.14.0
psycopg2==2.9.7
