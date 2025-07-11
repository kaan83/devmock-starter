from sqlalchemy import Column, Integer, String, DateTime, JSON, ForeignKey
from datetime import datetime
from .base import Base

class RequestLog(Base):
    __tablename__ = 'request_logs'

    id = Column(Integer, primary_key=True)
    endpoint_id = Column(Integer, ForeignKey("mock_endpoints.id"))
    timestamp = Column(DateTime, default=datetime.utcnow)
    method = Column(String)
    path = Column(String)
    request_body = Column(JSON)
    headers = Column(JSON)
    response_body = Column(JSON)
    status_code = Column(Integer)
    curl_command = Column(Text)