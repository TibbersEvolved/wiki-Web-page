import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import GemContainer from '../components/gemContainer'

export const Route = createFileRoute('/gems')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="p-2">
      <h3>About</h3>
      <GemContainer/>
    </div>
  )
}
