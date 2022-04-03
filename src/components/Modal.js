import React from 'react'

export default function Modal(props) {
  return (
    <div class="portfolio-modal modal fade" id={`portfolioModal${props.id}`} tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* Project details */}
                                    <h3 class="text-uppercase">{props.Text}</h3>                                    
                                    <img class="img-fluid d-block mx-auto" style={{height:'220px'}} src={props.Img} />
                                    <p>{props.Caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
