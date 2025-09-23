import { useState, useEffect } from 'react'

export interface ProgramItem {
  id: string
  program_kerja_id: string
  nama_program: string
  target: string
  timeline: string
  status: 'perencanaan' | 'berjalan' | 'selesai' | 'akan_dimulai'
  progress_percentage: number
  created_at: string
  updated_at: string
}

export interface ProgramKerja {
  id: string
  nama_divisi: string
  koordinator: string
  jumlah_anggota: number
  created_at: string
  updated_at: string
  program_items: ProgramItem[]
}

export function useProgramKerja() {
  const [programKerja, setProgramKerja] = useState<ProgramKerja[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProgramKerja = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/program-kerja')
        if (!response.ok) {
          throw new Error('Failed to fetch program kerja')
        }

        const data = await response.json()
        setProgramKerja(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProgramKerja()
  }, [])

  return { programKerja, loading, error }
}

export function useProgramKerjaById(id: string) {
  const [programKerja, setProgramKerja] = useState<ProgramKerja | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProgramKerja = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/program-kerja/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch program kerja')
        }

        const data = await response.json()
        setProgramKerja(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProgramKerja()
    }
  }, [id])

  return { programKerja, loading, error }
}

