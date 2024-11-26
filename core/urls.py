"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path


# views.py

import requests
from django.shortcuts import redirect
from django.conf import settings

def redirect_view(request):
    code = request.GET.get('code')
    if code:
        token_url = f'https://login.microsoftonline.com/{settings.AZURE_TENANT_ID}/oauth2/v2.0/token'
        token_data = {
            'grant_type': 'authorization_code',
            'client_id': settings.AZURE_CLIENT_ID,
            'client_secret': settings.AZURE_CLIENT_SECRET,
            'code': code,
            'redirect_uri': settings.AZURE_REDIRECT_URI,
        }
        response = requests.post(token_url, data=token_data)
        token_info = response.json()
        # Aquí puedes manejar el token y hacer peticiones a la API de OneDrive
        return redirect('home')  # Redirige a la página principal o donde desees
    return redirect('error')  # Manejar error

def list_files(access_token):
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get('https://graph.microsoft.com/v1.0/me/drive/root/children', headers=headers)
    return response.json()



urlpatterns = [
    path('admin/', admin.site.urls),
    path('redirect/', redirect_view, name='redirect'),
]


