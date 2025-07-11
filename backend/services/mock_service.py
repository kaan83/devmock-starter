from models.mock_endpoint import MockEndpoint
from sqlalchemy.orm import Session
from schemas.mock_endpoint import MockEndpointCreate

def create_mock(db: Session, data: MockEndpointCreate):
    mock = MockEndpoint(**data.dict())
    db.add(mock)
    db.commit()
    db.refresh(mock)
    return mock

def list_mocks(db: Session):
    return db.query(MockEndpoint).all()

def get_mock_by_path(db: Session, path: str):
    return db.query(MockEndpoint).filter(MockEndpoint.path == path).first()