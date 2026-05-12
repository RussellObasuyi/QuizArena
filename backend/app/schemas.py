from pydantic import BaseModel, EmailStr

class RegisterRequest(BaseModel):
    first_name: str
    last_name:  str
    email:      EmailStr
    password:   str

class LoginRequest(BaseModel):
    email:    EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type:   str = "bearer"

class RoomCreate(BaseModel):
    topic: str

class RoomResponse(BaseModel):
    id:    int
    code:  str
    topic: str

    class Config:
        from_attributes = True