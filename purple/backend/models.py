from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Location(models.Model):
    loc_tag = models.TextField()

    def __str__(self):
        return self.loc_tag

class Category(models.Model):
    cat_tag = models.TextField()

    def __str__(self):
        return self.cat_tag

class Purpose1(models.Model):
    pur_tag = models.TextField()
    
    def __str__(self):
        return self.pur_tag

class Purpose2(models.Model):
    pur_tag= models.TextField()

    def __str__(self):
        return self.pur_tag

class Place(models.Model):
    place = models.CharField(max_length=200)
    info = models.TextField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    open = models.TextField(null=True, blank=True)
    number = models.TextField(null=True, blank=True)
    sns = models.TextField(null=True, blank=True)
    menu = models.TextField(null=True, blank=True)
    image = models.TextField(null=True, blank=True)
    loc = models.ForeignKey('Location', on_delete=models.SET_NULL, null=True, blank=True)
    cat = models.ForeignKey('Category',on_delete=models.SET_NULL, null=True, blank=True)
    pur1 = models.ForeignKey('Purpose1', on_delete=models.SET_NULL, null=True, blank=True)
    pur2 = models.ForeignKey('Purpose2', on_delete=models.SET_NULL, null=True, blank=True)
    lat = models.FloatField(null=True, blank=True)
    lng = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.place

class CurationList(models.Model):
    exp1 = models.TextField(null=True, blank=True)
    exp2 = models.TextField(null=True, blank=True)
    exp3 = models.TextField(null=True, blank=True)
    exp4 = models.TextField(null=True, blank=True)
    exp5 = models.TextField(null=True, blank=True)
    place1 = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True, blank=True, related_name='place_1')
    place2 = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True, blank=True, related_name='place_2')
    place3 = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True, blank=True, related_name='place_3')
    place4 = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True, blank=True, related_name='place_4')
    place5 = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True, blank=True, related_name='place_5')

class Curation(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='Curation', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    curation_list = models.ForeignKey(CurationList, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title
