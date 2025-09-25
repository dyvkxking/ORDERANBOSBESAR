"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

interface GoogleMapsEmbedProps {
  mapsUrl: string
  address: string
  city: string
  className?: string
}

export default function GoogleMapsEmbed({ 
  mapsUrl, 
  address, 
  city, 
  className = "" 
}: GoogleMapsEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Convert Google Maps short URL to embed URL
  const getEmbedUrl = (url: string) => {
    // Using the provided coordinates: -7.961163991041367, 112.6224970519154
    const lat = -7.961163991041367
    const lng = 112.6224970519154
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sMalang%2C%20Malang%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid&q=${lat},${lng}`
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Hide loading after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden ${className}`}>
      {!hasError ? (
        <iframe
          src={getEmbedUrl(mapsUrl)}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          title="Lokasi Kantor"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p className="text-lg font-medium">Gagal Memuat Peta</p>
            <p className="text-sm">Silakan gunakan tombol di bawah</p>
          </div>
        </div>
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center transition-opacity duration-300">
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#255F38] mx-auto mb-2"></div>
            <p className="text-lg font-medium">Memuat Peta...</p>
            <p className="text-sm">Mohon tunggu sebentar</p>
          </div>
        </div>
      )}

      {/* Fallback button */}
      <div className="absolute bottom-4 right-4">
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors flex items-center shadow-lg"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Buka di Maps
        </a>
      </div>
    </div>
  )
}
