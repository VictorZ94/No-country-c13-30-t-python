APIS:

api/v1/saldo/<int:id>
Displays the user's balance, along with the user's name and identificaction_number.
ejemplo:
[{'name': 'camilo', 'identificaction_number': '365241145', 'balance': 20000 }]

api/v1/pago/<int:id>
Performs data entry and deducts from the user's balance.
{"amount": "40000" , "details": "pago de factura", "transaction_type": "pago", "user": 1 }

api/v1/recarga/
sends the identification number and the value to recharge to the user, this would be an api used by an external entity to recharge the user's wallet.
{"reload": 20000, "identification": "123456790" }

dependencies:

Django==4.2.4
djangorestframework==3.14.0
psycopg2==2.9.7
