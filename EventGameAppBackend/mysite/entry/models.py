from django.db import models

from django.conf import settings

# 궁금한거>> booking에서 subscriber의 역할은 뭐지?
# 우리 실습물에서의 subscriber "1"은 변하지않던데.. 원래는 변하는건가?

# fullstack > booking 보면서 필요한 것만 쏙쏙 빼서 넣는 중 이러다가 한번씩 터지는 맛 아니겠나요^_^...
class Entry(models.Model):

    # 예약회원 고유번호 : 회원테이블의 id값 (FK)
    # 사용자의 고유번호 pk가 123456... 사용자 고유번호로 찍히는거임
    no = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='Entrys'
    )

    # 사용자 응모정보 : 이름과 이메일
    name = models.TextField(max_length=50)
    email = models.TextField(max_length=80)
    score = models.IntegerField
    datetime = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.no.username+""+self.email

    # 우리 랜덤짤짤이 돌릴거라 목록데이터 내림차순 정렬은 필요없지 않나..? 걍 해놓기? optional이지만 내맘이니가^_^,,그것이,,프로그래밍이니가,,,
    class Meta:
        ordering = ['-datetime']