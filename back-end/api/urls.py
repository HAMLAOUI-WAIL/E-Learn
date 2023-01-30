from django.urls import path
from . import views

urlpatterns = [
#     path('',views.getRoutes,name="routes"),
    path('profile/',views.UserList.as_view()),
    path('profile/<int:pk>',views.UserListDtail.as_view()),
    path('utilisateur/', views.UTILISATEURSList.as_view()),
    path('utilisateur/<int:pk>/', views.UTILISATEURSDetail.as_view()),
    path('login',views.utilisateur_login),
    path('pages/',views.FlatPagesList.as_view()),
    path('pages/<int:pk>/<str:page_slug>/',views.FlatPagesDetail.as_view()),
    path('categorie/', views.CATEGORIESList.as_view()),
    path('annonce/', views.ANNONCESList.as_view()),
    
    #path('annonces', views.annonces, name='annonces'),
    #path('annonces/<int:id>', views.annonce_detail)
    #path('search-courses/<str:searchstring>', views.ANNONCESList.as_view()),
    # path('profile/create',views.CreateUsrView.as_view()),
    # path('profile/update/<int:pk>',views.UserViewSet.as_view({'get': 'list'}))
]
