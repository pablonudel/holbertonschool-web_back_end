#!/usr/bin/env python3
from typing import Union, Tuple
"""Module for to_kv function"""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """a type-annotated function that takes a string k
    and an int OR float v as arguments and returns a tuple."""
    return (k, v**2)
