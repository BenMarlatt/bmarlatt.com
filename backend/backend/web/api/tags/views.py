from typing import List

from fastapi import APIRouter
from fastapi.param_functions import Depends

from backend.db.dao.project_dao import ProjectDAO
from backend.db.models.project_model import ProjectModel
from backend.web.api.projects.schema import ProjectModelDTO, ProjectModelInputDTO

router = APIRouter()


@router.get("/", response_model=List[ProjectModelDTO])
async def get_project_models(
    limit: int = 10,
    offset: int = 0,
    project_dao: ProjectDAO = Depends(),
) -> List[ProjectModel]:
    """
    Retrieve all dummy objects from the database.

    :param limit: limit of dummy objects, defaults to 10.
    :param offset: offset of dummy objects, defaults to 0.
    :param dummy_dao: DAO for dummy models.
    :return: list of dummy objects from database.
    """
    return await project_dao.get_all_projects(limit=limit, offset=offset)


@router.put("/")
async def create_project_model(
    new_project_object: ProjectModelInputDTO,
    project_dao: ProjectDAO = Depends(),
) -> None:
    """
    Creates dummy model in the database.

    :param new_dummy_object: new dummy model item.
    :param dummy_dao: DAO for dummy models.
    """
    await project_dao.create_project_model(name=new_project_object.name, description=new_project_object.description, status=new_project_object.status)
