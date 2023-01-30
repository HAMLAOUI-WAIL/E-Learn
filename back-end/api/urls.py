from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('profile/',views.UserList.as_view()),
    path('profile/<int:pk>',views.UserListDtail().as_view()),
    # path('profile/create',views.CreateUsrView.as_view()),
    # path('profile/update/<int:pk>',views.UserViewSet.as_view({'get': 'list'}))
]
