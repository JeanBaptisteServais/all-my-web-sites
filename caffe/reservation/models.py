from django.db import models

class appointement(models.Model):

    date = models.CharField(max_length=255)
    number_person = models.CharField(max_length=100)
    message = models.CharField(max_length=255, blank=True)

    name_reservation = models.CharField(max_length=255)
    phone = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.name_reservation}"
