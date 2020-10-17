from django.contrib import admin

from .models import Entry

@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    list_display = ['name','score','email','datetime','no']
    # list_editable = ['name','email']
    #score를 고정해서 넘겨주기 ㄱㄴ???
    raw_id_fields = ['no']