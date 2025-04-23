#!/usr/bin/env python3
"""Module for the wait_n function"""
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


def sort_list(delay_list: list):
    """Sort a list in ASC"""
    list_len: int = len(delay_list)
    for i in range(list_len - 1):
        for j in range(list_len - 1 - i):
            if delay_list[j] > delay_list[j + 1]:
                delay_list[j], delay_list[j + 1] = delay_list[j + 1], delay_list[j]
    return delay_list

async def wait_n(n: int, max_delay: int) -> List[int]:
    """Return a sorted list of all the delays (float values) got from
    the wait_random function executed n times"""
    delay_list: list = []
    for i in range(n):
        delay = await wait_random(max_delay)
        delay_list.append(delay)
    return sort_list(delay_list)
