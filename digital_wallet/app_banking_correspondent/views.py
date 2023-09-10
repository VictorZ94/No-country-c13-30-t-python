from .forms import UsuarioForm 
from django.views.generic import FormView
from django.urls import reverse_lazy
from app_user.models import *

# def formulario_usuario(request):
#     if request.method == 'POST':
#         form = UsuarioForm(request.POST)
#         if form.is_valid():
#             form.save()
#     else:
#         form = UsuarioForm()

#     return render(request, 'formulario.html', {'form': form})

class backing_corresponsal(FormView):
    template_name = 'formulario.html'
    form_class = UsuarioForm
    success_url = reverse_lazy('bancking:corresponsalbancario')

    def form_valid(self, form):
        identification_number = form.cleaned_data['cedula'],
        code_validation =form.cleaned_data['codigo_validacion']
        usuario = User.objects.filter(
            identification_number=identification_number[0]).values('user_id').first()
        user_id = usuario['user_id']

        
        print(identification_number)
        print(code_validation)
        return super(backing_corresponsal, self).form_valid(form)