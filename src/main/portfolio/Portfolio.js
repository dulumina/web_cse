import React from 'react'
import Card from '../../components/Cards'
import Header from '../../components/Header'

export default function Portfolio(props) {
  return (
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <Header Title={'Portfolio'} Subtitle={'Gambaran Layanan yang Dapat disediakan CSE.'} />
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 1 */}
                    <Card isModal id='1' Img='assets/img/portfolio/1.svg' Text='Web Profil' Caption='Website yang dibuat untuk menampilkan profil sebuah perusahaan agar pembaca dapat mengenal perusahaan tersebut lebih dalam serta memperkenalkan produk dan layanan yang ditawarkan' />
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 2 */}
                    <Card isModal  id='2' Img='assets/img/portfolio/2.svg' Text='Aplikasi Inventory' Caption='Sebuah software yang dirancang khusus untuk mengelola dan mengawasi segala hal mulai dari pembelian barang supplier, stock opname, hingga pembuatan laporan inventory yang otomatis dan akurat.' />
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 3 */}
                    <Card isModal  id='3' Img='assets/img/portfolio/3.svg' Text='Aplikasi Accounting' Caption='Program aplikasi yang secara khusus dirancang untuk mengelola pencatatan transaksi usaha. Program ini memang digunakan oleh para akuntan perusahaan sehingga data-data seputar transaksi bisa lebih mudah dikelola.' />  
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    {/* Portfolio item 4 */}
                    <Card isModal  id='4' Img='assets/img/portfolio/4.svg' Text='Aplikasi Absensi' Caption='Platform yang bisa digunakan oleh HR untuk memantau kehadiran karyawan atau pegawai. Umumnya terintegrasi dengan sistem cuti dan payroll perusahaan sehingga memudahkan operasional HR yang sebelumnya bersifat manual. Aplikasi absensi online dapat berbasis web dan mobile.' />
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* Portfolio item 5 */}
                    <Card isModal  id='5' Img='assets/img/portfolio/5.svg' Text='Aplikasi POS' Caption='POS atau Point of Sales adalah suatu sistem yang digunakan dalam kebutuhan berbagai macam usaha bisnis ritel untuk dapat mempermudah proses transaksi jual beli secara cepat, aman, dan sistematis. POS juga termasuk versi modern dari mesin kasir konvensional yang masih sering digunakan pada beberapa toko atau usaha.' />
                </div>
                <div class="col-lg-4 col-sm-6">
                    {/* Portfolio item 6 */}
                </div>
            </div>
        </div>
    </section>
  )
}
