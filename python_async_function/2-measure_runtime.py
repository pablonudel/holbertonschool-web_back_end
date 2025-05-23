#!/usr/bin/env python3
"""Module for the measure_time funtion"""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time for wait_n(n, max_delay),
    and returns total_time / n as float"""
    start_time = time.time()
    list = asyncio.run(wait_n(n, max_delay))
    if list:
        total_time = time.time() - start_time
        return total_time / n
