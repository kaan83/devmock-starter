from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from models.waitlist import Waitlist
from schemas.waitlist import WaitlistCreate
from fastapi import HTTPException

def create_waitlist_entry(db: Session, waitlist_data: WaitlistCreate) -> Waitlist:
    """
    Create a new waitlist entry with proper error handling.
    """
    try:
        waitlist_entry = Waitlist(email=waitlist_data.email)
        db.add(waitlist_entry)
        db.commit()
        db.refresh(waitlist_entry)
        return waitlist_entry
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email already registered")
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal server error")

def get_waitlist_count(db: Session) -> int:
    """
    Get total number of waitlist entries.
    """
    return db.query(Waitlist).count()

def check_email_exists(db: Session, email: str) -> bool:
    """
    Check if email already exists in waitlist.
    """
    return db.query(Waitlist).filter(Waitlist.email == email).first() is not None