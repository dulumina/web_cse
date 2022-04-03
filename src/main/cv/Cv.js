import React from 'react'
import Template from '../../components/Template'

export default function Client() {
  return (
    <div class="py-5 bg-dark">
      <div class="container">
        <div class="row" style={ {color:'#fff'} }>
          {/* <Template md='4' Img='assets/img/icon/cv.png' Caption='Creative Software Engineer | CV. Maleo Mitra Tekno | Jalan Maleo No. 60 Palu, Mantikulore, Sulawesi Tengah, 94234' /> */}
          <Template md='12' Title='Creative Software Engineer | CV. Maleo Mitra Tekno' Caption='Creative Software Engineer (CSE) adalah sebuah perusahaan Teknologi Informasi yang bergerak dibidang Teknologi Informasi yang berfokus pada pengembangan Sistem informasi, teknologi dan telekomunikasi yang berdiri pada tahun 2022, dengan semangat dan komitmen tinggi untuk menyediakan solusi dan layanan teknologi bisnis di Indonesia, Khususnya Sulawesi Tengah' />
        </div>
      </div>
    </div>
  )
}
