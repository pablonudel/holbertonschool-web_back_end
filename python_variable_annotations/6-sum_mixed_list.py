#!/usr/bin/env python3
from typing import List, Union
"""Module for sum_mixed_list function"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """a type-annotated function which takes a list mxd_lst of integers
    and floats and returns their sum as a float."""
    return sum(mxd_lst)
