#!/usr/bin/env python3
"""Module for make_multiplier function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """a type-annotated function that takes a float multiplier as argument
    and returns a the function multiply"""
    def multiply(value: float) -> float:
        """a type-annotated function that takes a float value as argument
        and returns the multiply of value and multiplier as float"""
        return value * multiplier
    return multiply
