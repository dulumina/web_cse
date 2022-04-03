import React from 'react'

export default function Timeline(props) {
  return (
    <>
        <li class={props.Class}>
            <div class="timeline-image">
                <img class="rounded-circle img-fluid" src={props.Img} />
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>{props.Title}</h4>
                    <h4 class="subheading">{props.Subtitle}</h4>
                </div>
                <div class="timeline-body"><p class="text-muted">{props.Caption}</p></div>
            </div>
        </li>
    </>
  )
}
