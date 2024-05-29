'use client'

import { VisualEditing } from 'next-sanity'
import { useEffect } from 'react'

export function AutomaticVisualEditing() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent) {
      location.href = '/api/disable-draft'
    }
  }, [])

  return <VisualEditing />
}