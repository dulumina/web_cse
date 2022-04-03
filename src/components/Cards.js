import React from 'react'
import Modal from './Modal'

export default function Cards({ isModal, Text, Img, id, Caption }) {
  return (
  <>
    { isModal && <Modal Text={Text} Img={Img} id={id} Caption={Caption} /> }
    <div class="portfolio-item">
      <a class="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${id}`}>
          <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fas fa-eye fa-3x"></i></div>
          </div>
          <img class="img-fluid" style={{ height:'300px' }} src={Img} />
      </a>
      <div class="portfolio-caption">
          <div class="portfolio-caption-heading">{Text}</div>
      </div>
  </div>
  </>
  )
}
