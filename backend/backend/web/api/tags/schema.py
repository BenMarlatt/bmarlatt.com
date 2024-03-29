from pydantic import BaseModel, ConfigDict

class TagModelDTO(BaseModel):
    """
    DTO for tag models.

    It is returned when accessing tag models from the API.
    """

    id: int
    name: str
    description: str
    created_at: str
    updated_at: str
    model_config = ConfigDict(from_attributes=True)


class TagModelInputDTO(BaseModel):
    """DTO for creating a new tag model."""

    name: str
    description: str
