class Room:
    def __init__(self, room_name, size, room_desc):
        self.room_name = room_name
        self.room_size = size
        self.room_desc = room_desc


class Booking:
    def __init__(self, booking_datetime, customer_phone, customer_email, customer_name, customer_dob, booking_duration):
        self.booking_datetime = booking_datetime
        self.customer_phone = customer_phone
        self.customer_email = customer_email
        self.customer_name = customer_name
        self.customer_dob = customer_dob
        self.booking_duration = booking_duration


class Donation:
    def __init__(self, donation_datetime, customer_phone, customer_email, customer_name, customer_dob, donation_amount):
        self.donation_datetime = donation_datetime
        self.customer_phone = customer_phone
        self.customer_email = customer_email
        self.customer_name = customer_name
        self.customer_dob = customer_dob
        self.donation_amount = donation_amount