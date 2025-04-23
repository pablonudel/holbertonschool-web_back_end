#!/usr/bin/env python3
"""Module for the wait_n function"""
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[int]:
    """Return a sorted list of all the delays (float values) got from
    the wait_random function executed n times"""
    list = []
    for i in range(n):
        delay = await wait_random(max_delay)
        list.append(delay)
    return sorted(list)
