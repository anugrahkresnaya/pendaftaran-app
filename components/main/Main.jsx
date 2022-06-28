import Image from "next/image";
import styles from "./Main.module.css";

const Main = () => {
  return(
    <main>
      <div className={styles.container}>
        <div className={styles.section1}>
          <Image 
            src='/images/akreditasi.png'
            width={150}
            height={170.95}
            alt="akreditasi"
          />
          <h1>PENDAFTARAN MAHASISWA BARU UNIVERSITAS GUNADARMA</h1>
          <p className={styles.daftar}>Ayo daftar sekarang ! Bersama Universitas Gunadarma, raih masa depanmu saat ini.</p>
          <p className={styles.doctor}>Khusus untuk Pendaftaran fakultas Kedokteran:</p>
          <p className={styles.doctor}>0877 8811 9996</p>
          <p className={styles.doctor}>0877 8811 9996</p>
        </div>
        <div className={styles.section2}>
          <Image 
            src='/images/pmbonline.png'
            width={360}
            height={573.03}
            alt="pmbonline"
          />
        </div>
        <div className={styles.section3}>
          <p>
            Universitas Gunadarma membuka Pendaftaran Penerimaan Mahasiswa Baru 2022 secara daring 
            yang sesuai dengan protokol kesehatan di masa pandemi COVID19. Calon mahasiswa dapat menjadi 
            mahasiswa baru UG tanpa harus datang ke kampus dan tidak perlu menunggu kelulusan SMA/SMK/MA.
          </p>
          <p>
            Silakan lakukan pendaftaran pada web ini. Jalur Penerimaan Mahasiswa Baru saat ini adalah jalur 
            online, yaitu mahasiswa baru diseleksi dengan (1)mengisikan nilai sejumlah mata pelajaran pada 
            rapor semester 4 dan 5, serta mengunggah file rapor; atau (2)mengikuti Tes Potensi Akademik & 
            Bahasa Ingggris secara online
          </p>
          <p>
            Silakan <span className={styles.red}>melihat daftar FAQ</span> atau gunakan online chat apabila ada pertanyaan
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;