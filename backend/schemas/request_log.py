from pydantic import BaseModel
from typing import Dict
from datetime import datetime

class RequestLogOut(BaseModel):
    id: int
    method: str
    path: str
    request_body: Dict
    headers: Dict
    response_body: Dict
    status_code: int
    timestamp: datetime
    curl_command: str

    class Config:
        orm_mode = True