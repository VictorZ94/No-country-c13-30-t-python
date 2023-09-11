from .forms import UsuarioForm 
from django.views.generic import FormView
from django.urls import reverse_lazy
from app_user.models import *
import requests

class backing_corresponsal(FormView):
    template_name = 'formulario.html'
    form_class = UsuarioForm
    success_url = reverse_lazy('bancking:corresponsalbancario')

    def form_valid(self, form):
        identification_number = form.cleaned_data['cedula'],
        value =form.cleaned_data['codigo_validacion']
        selected_option = self.request.POST.get('opcion', 'recarga')

        if selected_option == 'recarga':
            self.query_reload(identification_number,value)

        elif selected_option == 'retiro':
            self.querywithdrawals(identification_number,value)

        return super(backing_corresponsal, self).form_valid(form)
    

    def query_reload(self, identification_number, value):
            print('Se seleccionó Recarga')
            usuario = User.objects.filter(identification_number=identification_number[0]).values('id').first()
            if usuario:
                response = requests.post('http://127.0.0.1:8000/api/v1/recarga/', json={"identification": identification_number[0], "reload": int(value)})
                
                if response.status_code == 201:
                    print('Recarga exitosa')
                    print(usuario)
                    self.registerTransaction(usuario["id"],  value, "Recarga Corresponsal", "Recarga")
                else:
                    print('Error en la recarga ')
                    print(response)
            else:
                print('Usuario no encontrado')


    def querywithdrawals(self, identification_number, code_validation):
            print('Se seleccionó retiro')
            response = requests.post('http://127.0.0.1:8000/api/v1/corresponsalretiro/', json={"identification_number": identification_number[0], "code_validation": code_validation})
                
            if response.status_code == 201:
                print('retiro exitosa')
                response_data = response.json()
                print(response_data)
                self.registerTransaction(response_data["id"],  response_data["amount"], "Retiro Corresponsal", "Retiro")


            else:
                print('Error en el retiro ')
                print(response)

    def registerTransaction(self,user,amount,details,transaction_type):
            url="http://127.0.0.1:8000/api/v1/pago/"
            print(user)
            print(amount)

            response = requests.post(url, json={"user": user, "amount": amount,"details": details,"transaction_type": transaction_type})
            if response.status_code == 201:
                print('se registro la transaccion')
            else:
                print('Error en la transaccion ')
                print(response)

