/**
 * SVG > Icons
 */
import React from 'react'
import facebook from './facebook.svg'
import github from './github.svg'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import mail from './mail.svg'

export const Icons = {
  Facebook: () => (
    <span dangerouslySetInnerHTML={{ __html: facebook }} />
  ),
  Github: () => (
    <span dangerouslySetInnerHTML={{ __html: github }} />
  ),
  Instagram: () => (
    <span dangerouslySetInnerHTML={{ __html: instagram }} />
  ),
  Linkedin: () => (
    <span dangerouslySetInnerHTML={{ __html: linkedin }} />
  ),
  Mail: () => (
    <span dangerouslySetInnerHTML={{ __html: mail }} />
  )
}
