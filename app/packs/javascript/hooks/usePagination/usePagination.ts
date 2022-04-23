import { useState, useEffect, useCallback } from 'react'
import { server } from '../../utils/server'
import { PaginationParams } from './types'

export const usePagination = <DataType>({url, limit = 10, initialOffset = 0}: PaginationParams) => {
  const [data, setData] = useState<DataType[]>([])
  const [offset, setOffset] = useState<number>(initialOffset)
  const [loading, setLoading] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(false);

  const fetchPage = async () => {
    if (loading || end) return;

    setLoading(true)

    const requestUrl = `${url}?limit=${limit}&offset=${offset}`;
    const response = await server.get(requestUrl);
    const newChunk = await response.json();
    const allData = [...data, ...newChunk];

    setLoading(false)

    if (allData.length === data.length) {
      setEnd(true)
      return
    }
    setData(allData)
    setOffset(offset + limit)

    return allData;
  }

  const fetchPageOnCallback = useCallback(
    fetchPage,
    [limit, offset, data, loading, end]
  )

  return {
    data,
    setData,
    fetchPage,
    fetchPageOnCallback,
    loading,
    end
  }
}
