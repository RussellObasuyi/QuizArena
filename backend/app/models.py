from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id           = Column(Integer, primary_key=True, index=True)
    first_name   = Column(String, nullable=False)
    last_name    = Column(String, nullable=False)
    email        = Column(String, unique=True, index=True, nullable=False)
    password     = Column(String, nullable=False)
    created_at   = Column(DateTime, server_default=func.now())

class Room(Base):
    __tablename__ = "rooms"

    id         = Column(Integer, primary_key=True, index=True)
    code       = Column(String, unique=True, nullable=False)
    host_id    = Column(Integer, nullable=False)
    topic      = Column(String, nullable=False)
    created_at = Column(DateTime, server_default=func.now())