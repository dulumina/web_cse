import React from 'react'

export default function Template(props) {
  return (
    <div class={`col-md-${props.md}`}>
        <span class={props.Clsicon}>
            <i class={props.Circle}></i>
            <i class={props.Icon}></i>
        </span>
        <img class="img-fluid" width={'20%'} src={props.Img} />
        <h4 class="my-3">{props.Title}</h4>
        <p class="text-muted">{props.Caption}</p>
    </div>
  )
}
