from pydantic import BaseModel
from typing import Dict, Optional

class MockEndpointCreate(BaseModel):
    name: str
    path: str
    method: str
    response_body: Optional[Dict] = {}
    status_code: int = 200
    headers: Optional[Dict] = {}
    delay_seconds: float = 0.0
    error_probability: float = 0.0
    enabled: bool = True

class MockEndpointOut(MockEndpointCreate):
    id: int
    class Config:
        orm_mode = True