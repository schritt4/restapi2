from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .serializers import CurationSerializer
from .models import Curation

class CurationList(APIView):    
    def get(self, request):    # Curation 리스트 보여주기
        curations = Curation.objects.all()

        serializer = CurationSerializer(curations, many=True)   # 여러개의 객체를 serialize하려면 many=True
        return Response(serializer.data)

class CurationDetail(APIView):
    def get_object(self, pk):   # Curation 객체 가져오기
        try:
            return Curation.objects.get(pk=pk)
        except Curation.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        curations = self.get_object(pk)
        serializer = CurationSerializer(curations)
        return Response(serializer.data)

