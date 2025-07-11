from fastapi import FastAPI
from api.routes import router as api_router
from database import init_db
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(title="DevMock API", lifespan=lifespan)

app.include_router(api_router)

# ⏩ Run the app when executed directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
