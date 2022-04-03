import React from 'react'
import Header from '../../components/Header'
import Template from '../../components/Template'

export default function Location() {
  return (
    <section class="page-section bg-light" id="location">
            <div class="container">
                <Header Title='Lokasi' Subtitle={'Lokasi kantor Creative Software Engineer'} />                
                <div class="row text-center">
                    <Template md='4' Img='assets/img/icon/cv.png' Caption='Creative Software Engineer | CV. Maleo Mitra Tekno | Jalan Maleo No. 60 Palu, Mantikulore, Sulawesi Tengah, 94234' />
                    <div className="col-md-8" style={{border: '5px solid #b22222'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d997.3302242634953!2d119.8962863!3d-0.9047501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bef05104c43fb%3A0x752caf0a0d058d90!2sKios%20Hermetas!5e0!3m2!1sid!2sid!4v1647497696115!5m2!1sid!2sid" height="250" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>   
                    </div>
                </div>
            </div>
        </section>
  )
}
