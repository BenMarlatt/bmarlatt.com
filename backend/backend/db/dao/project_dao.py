from typing import List, Optional

from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from datetime import datetime

from backend.db.dependencies import get_db_session
from backend.db.models.project_model import ProjectModel

class ProjectDAO:
    """Class for accessing project table."""
    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session
    
    async def create_project_model(self, name: str, description: str, status: str) -> None:
        """
        Add single project to session.

        :param name: name of a project.
        :param description: description of a project.
        :param status: status of a project.
        """
        created_at = datetime.now()
        updated_at = datetime.now()
        self.session.add(ProjectModel(name=name, description=description, created_at=created_at, updated_at=updated_at, status=status))

    async def get_all_projects(self, limit: int, offset: int) -> List[ProjectModel]:
        """
        Get all project models with limit/offset pagination.

        :param limit: limit of projects.
        :param offset: offset of projects.
        :return: stream of projects.
        """
        raw_projects = await self.session.execute(
            select(ProjectModel).limit(limit).offset(offset),
        )

        return list(raw_projects.scalars().fetchall())
    
    async def filter(
        self,
        name: Optional[str] = None,
        description: Optional[str] = None,
        created_at: Optional[str] = None,
        updated_at: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[ProjectModel]:
        """
        Get filter projects by traits.

        :param name: name of project instance.
        :param description: description of project instance.
        :param created_at: created_at of project instance.
        :param updated_at: updated_at of project instance.
        :param status: status of project instance.
        :return: project models.
        """
        query = select(ProjectModel)
        if name:
            query = query.where(ProjectModel.name == name)
        if description:
            query = query.where(ProjectModel.description == description)
        if created_at:
            query = query.where(ProjectModel.created_at == created_at)
        if updated_at:
            query = query.where(ProjectModel.updated_at == updated_at)
        if status:
            query = query.where(ProjectModel.status == status)
        rows = await self.session.execute(query)
        return list(rows.scalars().fetchall())
