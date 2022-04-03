import React from 'react'
import Header from '../../components/Header'
import Template from '../../components/Template'


export default function Dashboard() {
  return (
    <section class="page-section" id="dashboard">        
            <div class="container">
                <Header Title='Creative Software Engineer' Subtitle='Apa itu Creative Software Engineer???' />
                <div class="row text-center">
                    <Template md='6' Title='Creative Software Engineer' Caption='Creative Software Engineer (CSE) adalah sebuah perusahaan Teknologi Informasi yang bergerak di bidang "Teknologi Informasi" yang berfokus pada "Pengembangan Aplikasi" yang berdiri pada tahun 2021, dengan semangat dan komitmen tinggi untuk menyediakan solusi dan layanan Teknologi Bisnis di Indonesia, khususnya di Sulawesi Tengah.' Img='assets/img/icon/cse.png' />
                    <Template md='6' Title='PT. Maleo Mitra Tekno' Caption='PT. Maleo Mitra Tekno adalah Lembaga Hukum yang menaungi "Creative Software Engineer (CSE)"' Img='assets/img/icon/cv.png' />  
                </div>
            </div>
        </section>
  )
}
