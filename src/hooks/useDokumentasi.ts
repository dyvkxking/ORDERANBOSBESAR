import { useState, useEffect } from 'react'

export interface Dokumentasi {
  id: string
  title: string
  description?: string
  event_date: string
  location?: string
  photos: string[]
  participants: number
  likes: number
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
}

export function useDokumentasi() {
  const [dokumentasi, setDokumentasi] = useState<Dokumentasi[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDokumentasi = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/dokumentasi?status=published')
        if (!response.ok) {
          throw new Error('Failed to fetch dokumentasi')
        }

        const data = await response.json()
        setDokumentasi(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchDokumentasi()
  }, [])

  return { dokumentasi, loading, error }
}

export function useDokumentasiById(id: string) {
  const [dokumentasi, setDokumentasi] = useState<Dokumentasi | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDokumentasi = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/dokumentasi/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch dokumentasi')
        }

        const data = await response.json()
        setDokumentasi(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDokumentasi()
    }
  }, [id])

  return { dokumentasi, loading, error }
}




