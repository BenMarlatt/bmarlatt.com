from fastapi.routing import APIRouter

from backend.web.api import docs, projects, echo, monitoring, users

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(users.router)
api_router.include_router(docs.router)
api_router.include_router(echo.router, prefix="/echo", tags=["echo"])
api_router.include_router(projects.router, prefix="/projects", tags=["projects"])