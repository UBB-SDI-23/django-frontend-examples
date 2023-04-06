import os

import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_example.settings')

django.setup()


from rest_api.models import Teacher, Course


if __name__ == '__main__':
    from faker import Faker

    fake = Faker()
    n = 10000
    for _ in range(n):
        Teacher.objects.create(name=fake.name(), email=fake.email(), address=fake.address())
        Course.objects.create(name=fake.name(), description=fake.text(), teacher=Teacher.objects.last())
