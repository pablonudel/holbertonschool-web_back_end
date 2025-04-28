#!/usr/bin/env python3
"""Module for the measure_runtime function"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Execute async_comprehension four times in parallel
    and return the total runtime"""
    startTime = time.time()
    res = await asyncio.gather(*[async_comprehension() for _ in range(4)])
    if res:
        endTime = time.time()
        return endTime - startTime
