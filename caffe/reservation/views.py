from django.shortcuts import render
from .models import appointement


def reservation(request):

    if request.method == "POST":

        date = request.POST.get("date")
        number_person = request.POST.get("number_person")
        message = request.POST.get("message")
        name_reservation = request.POST.get("name_reservation")
        phone = request.POST.get("phone")

        if date and number_person and name_reservation and phone:

            appoint = appointement.objects.create(
                date=date, number_person=number_person, message=message,
                name_reservation=name_reservation, phone=phone
            ).save()

    return render(request, "reservation.html")
