# Generated by Django 4.1 on 2023-03-09 14:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_remove_teacher_age_student_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursestudent',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_students', to='rest_api.course'),
        ),
        migrations.AlterField(
            model_name='coursestudent',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_courses', to='rest_api.student'),
        ),
    ]
