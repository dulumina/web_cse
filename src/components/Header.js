import React from 'react'

export default function Header({Title, Subtitle}) {
  return (
    <div class="text-center">
        <h2 class="section-heading text-uppercase" style={{color: '#000'}}>{ Title }</h2>
        <h3 class="section-subheading text-muted">{ Subtitle }</h3>
    </div>
  )
}
