from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from schemas.mock_endpoint import MockEndpointCreate, MockEndpointOut
from schemas.request_log import RequestLogOut
from services.mock_service import create_mock, list_mocks, get_mock_by_path
from database import SessionLocal
import random
import time

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/mocks/", response_model=MockEndpointOut)
def create_mock_endpoint(data: MockEndpointCreate, db: Session = Depends(get_db)):
    return create_mock(db, data)

@router.get("/mocks/", response_model=list[MockEndpointOut])
def list_mock_endpoints(db: Session = Depends(get_db)):
    return list_mocks(db)

@router.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
def dynamic_mock(path: str, request: Request, db: Session = Depends(get_db)):
    mock = get_mock_by_path(db, f"/{path}")
    if not mock or not mock.enabled:
        return {"error": "Mock not found"}, 404

    if random.random() < mock.error_probability:
        return {"error": "Simulated error"}, 500

    time.sleep(mock.delay_seconds)
    return mock.response_body