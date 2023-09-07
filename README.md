# c13-30-t-python

## Digital Wallet

APIS:

api/v1/saldo/<int:id>
Muestra el saldo del usuario, junto con el nombre y la identificacion del usuario.
ejemplo:
[
{
'name': 'camilo',
'identificaction_number': '365241145',
'initial_balance': 20000

}
]
api/v1/pago/<int:id>
Realiza la insecion de datos y descuenta del saldo del usuario
{
"amount": "40000" ,
"details": "pago de factura",
"transaction_type": "pago",
"user": 1
}
