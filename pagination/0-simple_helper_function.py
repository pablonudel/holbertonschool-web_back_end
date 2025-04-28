#!/usr/bin/env python3
"""Module for function index_range"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int]:
    """Return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list
    for those pagination parameters"""
    end_index = page * page_size
    start_index = end_index - page_size

    return (start_index, end_index)
