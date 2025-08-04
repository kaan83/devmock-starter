from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from models.base import Base
from models.waitlist import Waitlist  # Import to register with SQLAlchemy
from models.mock_endpoint import MockEndpoint  # Import to register with SQLAlchemy
from config import DATABASE_URL
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create engine with connection pooling for SQLite
engine = create_engine(
    DATABASE_URL, 
    connect_args={
        "check_same_thread": False,
        "timeout": 20,
    },
    poolclass=StaticPool,
    pool_pre_ping=True,
    echo=False  # Set to True for SQL debugging
)

SessionLocal = sessionmaker(bind=engine, autoflush=False)

def get_db():
    """
    Dependency to get database session with proper cleanup.
    """
    db = SessionLocal()
    try:
        yield db
    except Exception as e:
        logger.error(f"Database error: {e}")
        db.rollback()
        raise
    finally:
        db.close()

def init_db():
    """
    Initialize database with all tables.
    """
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        raise