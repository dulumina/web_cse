import React from 'react'
import Timeline from '../../components/Timeline'
import Header from '../../components/Header'

export default function About() {
  return (
    <section class="page-section" id="about">
            <div class="container">
                <Header Title='Tentang Kami' Subtitle='Berikut Visi & Misi Creative Software Engineer' />                
                <ul class="timeline">
                    <Timeline Img='assets/img/about/1.jpg' Title='Visi' Subtitle='Creative Software Engineer' Caption='Menjadi perusahaan yang Kompeten, Profesional, Berkualitas dan Terpercaya dalam pengembangan teknologi informasi dibidang perangkat lunak (softwere).' />
                    <Timeline Img='assets/img/about/2.jpg' Class='timeline-inverted' Title='Misi' Subtitle='Creative Software Engineer' Caption='1. Mengembangkan Product IT yang berkualitas dan Kompetitif 2. Memberikan servis yang profesional kepada mitra 3. Mengembangkan kemitraan yang saling menguntungkan 4. Mengembangkan inovasi terbaik dan terkini dalam setiap produk 5. Meningkatkan benefit dan nilai tambah bagi mitra.' />
                    <Timeline Img='assets/img/about/3.jpg' Title='Moto' Subtitle='IT make it easy' Caption='Potret penyedian jasa solusi atas kebutuhan mitra kami dalam pengembangan paket Information Technology. Creative Software Engineer memiliki spesialisasi di bidang Teknologi Informasi, sehingga memiliki pemahaman yang komprehensif dan aktual mengenai pemanfaatan IT bagi para mitra.' />                    
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Creative
                                <br />
                                Software
                                <br />
                                Engineer
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
  )
}
