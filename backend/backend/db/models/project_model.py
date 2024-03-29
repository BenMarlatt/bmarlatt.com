from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql.sqltypes import String

from backend.db.base import Base

class ProjectModel(Base):
    """Model for referencing individual projects"""

    __tablename__ = "project_model"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(length=200))
    description: Mapped[str] = mapped_column(String(length=200))
    created_at: Mapped[str] = mapped_column(String(length=200))
    updated_at: Mapped[str] = mapped_column(String(length=200))
    status: Mapped[str] = mapped_column(String(length=200))

    tags = relationship("TagsModel", secondary="project_tags")


class ProjectTags(Base):
    """Association table for project and tags"""
    __tablename__ = "project_tags"
    project_id: Mapped[int] = mapped_column(ForeignKey("project_model.id"), primary_key=True)
    tag_id: Mapped[int] = mapped_column(ForeignKey("tags_model.id"), primary_key=True)