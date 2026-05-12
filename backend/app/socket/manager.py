from fastapi import WebSocket

class ConnectionManager:
    def __init__(self):
        # Rooms is a dict: { room_code: [list of connected websockets] }
        self.rooms: dict[str, list[WebSocket]] = {}

    async def connect(self, room_code: str, websocket: WebSocket):
        await websocket.accept()
        if room_code not in self.rooms:
            self.rooms[room_code] = []
        self.rooms[room_code].append(websocket)

    def disconnect(self, room_code: str, websocket: WebSocket):
        self.rooms[room_code].remove(websocket)
        if not self.rooms[room_code]:
            del self.rooms[room_code]

    async def broadcast(self, room_code: str, message: str):
        for connection in self.rooms.get(room_code, []):
            await connection.send_text(message)

manager = ConnectionManager()