from sqlalchemy import Column, Integer, String, Text, Boolean, Float, JSON
from .base import Base

class MockEndpoint(Base):
    __tablename__ = 'mock_endpoints'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    path = Column(String, unique=True, nullable=False)
    method = Column(String, nullable=False, default="GET")
    response_body = Column(JSON, default={})
    status_code = Column(Integer, default=200)
    headers = Column(JSON, default={})
    delay_seconds = Column(Float, default=0.0)
    error_probability = Column(Float, default=0.0)
    enabled = Column(Boolean, default=True)