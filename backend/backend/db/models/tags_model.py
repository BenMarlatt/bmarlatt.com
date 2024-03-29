from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql.sqltypes import String

from backend.db.base import Base

class TagsModel(Base):
    """Model for refencning individual tags"""

    __tablename__ = "tags_model"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(length=200))  # noqa: WPS432
    description: Mapped[str] = mapped_column(String(length=200))  # noqa: WPS432
    created_at: Mapped[str] = mapped_column(String(length=200))  # noqa: WPS432
    updated_at: Mapped[str] = mapped_column(String(length=200))  # noqa: WPS432
