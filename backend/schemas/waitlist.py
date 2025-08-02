from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class WaitlistCreate(BaseModel):
    email: EmailStr

class WaitlistOut(BaseModel):
    id: int
    email: str
    created_at: datetime
    is_notified: bool
    
    class Config:
        orm_mode = True