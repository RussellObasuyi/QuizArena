from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Room
from app.schemas import RoomCreate, RoomResponse
import random, string

router = APIRouter(prefix="/rooms", tags=["rooms"])

def generate_code(length=6) -> str:
    return "".join(random.choices(string.ascii_uppercase + string.digits, k=length))

@router.post("/create", response_model=RoomResponse)
def create_room(body: RoomCreate, db: Session = Depends(get_db)):
    room = Room(code=generate_code(), topic=body.topic, host_id=1)
    db.add(room)
    db.commit()
    db.refresh(room)
    return room

@router.get("/{code}", response_model=RoomResponse)
def get_room(code: str, db: Session = Depends(get_db)):
    room = db.query(Room).filter(Room.code == code).first()
    if not room:
        raise HTTPException(status_code=404, detail="Room not found")
    return room