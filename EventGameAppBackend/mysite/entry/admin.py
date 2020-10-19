from django.contrib import admin

from entry.models import Entry


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'datetime']
    # list_editable = ['name','email']
    # score를 고정해서 넘겨주기 ㄱㄴ???
    # raw_id_fields = ['no']
    # search_fields = ['score', 'no', 'datetime']


# @admin.register(Score)
# class ScoreAdmin(admin.ModelAdmin):
#     list_display = ['score']
