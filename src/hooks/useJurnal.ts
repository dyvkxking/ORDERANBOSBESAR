import { useState, useEffect } from 'react'

export interface Jurnal {
  id: string
  title: string
  author: string
  content: string
  excerpt?: string
  category: string
  tags: string[]
  read_time: string
  likes: number
  comments: number
  featured_image_url?: string
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
}

export function useJurnal(category?: string) {
  const [jurnal, setJurnal] = useState<Jurnal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJurnal = async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams()
        if (category) params.append('category', category)
        params.append('status', 'published')

        const response = await fetch(`/api/jurnal?${params.toString()}`)
        if (!response.ok) {
          throw new Error('Failed to fetch jurnal')
        }

        const data = await response.json()
        setJurnal(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchJurnal()
  }, [category])

  return { jurnal, loading, error }
}

export function useJurnalById(id: string) {
  const [jurnal, setJurnal] = useState<Jurnal | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJurnal = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/jurnal/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch jurnal')
        }

        const data = await response.json()
        setJurnal(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchJurnal()
    }
  }, [id])

  return { jurnal, loading, error }
}

