# generated by datamodel-codegen:
#   filename:  location_2D.json

from __future__ import annotations

from pydantic import BaseModel


class Location2D(BaseModel):
    map: str
    x: float
    y: float
    yaw: float
