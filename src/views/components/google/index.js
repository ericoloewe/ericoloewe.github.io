/**
 * Components > Google
 */
import React from 'react'
import googleAnalytics from './analytics.html'
import googleFirebase from './firebase.html'

export function GoogleAnalytics() {
  return (
    <span dangerouslySetInnerHTML={{ __html: googleAnalytics }} />
  )
}

export function GoogleFirebase() {
  return (
    <span dangerouslySetInnerHTML={{ __html: googleFirebase }} />
  )
}
