from pydantic import BaseModel, ConfigDict


class ProjectModelDTO(BaseModel):
    """
    DTO for project models.

    It returned when accessing project models from the API.
    """

    id: int
    name: str
    description: str
    created_at: str
    updated_at: str
    status: str
    model_config = ConfigDict(from_attributes=True)


class ProjectModelInputDTO(BaseModel):
    """DTO for creating new project model."""

    name: str
    description: str
    status: str