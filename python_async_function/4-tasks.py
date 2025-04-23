#!/usr/bin/env python3
"""Module for the task_wait_n function"""
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Return a sorted list of all the delays (float values) got from
    the task_wait_random function executed n times"""
    list = []
    for i in range(n):
        delay = await task_wait_random(max_delay)
        list.append(delay)
    return sorted(list)
