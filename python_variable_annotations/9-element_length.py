#!/usr/bin/env python3
"""Module for the element_length function"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Calculates the length of each sequence within an iterable
    and return a list of tuples. Each tuple contains the sequence from lst
    and the length of the sequence"""
    return [(i, len(i)) for i in lst]
