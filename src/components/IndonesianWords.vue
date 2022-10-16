<template>
  <main class="indonesianWords">
    <div class="card mt-5">
      <h3 class="card-header">Glossary of terms in Intellectual language</h3>
      <!--      <h3 class="card-header">Istilah dalam bahasa Intelektual</h3>-->
      <div class="card-body">
        <div class="card-text mt-5">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Common" aria-label="Common words" v-model="commonWord">
            <span class="input-group-text"><i class="bi bi-arrow-left-right"></i></span>
            <input type="text" class="form-control" placeholder="Intellectual" aria-label="Intellectual words"
                   v-model="intellectualWord" disabled>
          </div>
          <div class="item" v-for="common in commonWordsSearch" :key="common">
            <p>{{ common.common }}<br></p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndonesianWords",
  data() {
    return {
      commonWord: '',
      intellectualWord: '',
      wordsList: [
        {common: "pembenaran", intellectual: "validasi"},
        {common: "dibuang", intellectual: "dideportasi"},
        {common: "akibat", intellectual: "konsekuensi"},
        {common: "pelestarian", intellectual: "konservasi"},
        {common: "tanggapan", intellectual: "persepsi"},
        {common: "bukannya", intellectual: "alih-alih"},
        {common: "mengagungkan", intellectual: "mengglorifikasi"},
        {common: "terkandung/tersimpul", intellectual: "tersirat"},
        {common: "cuek", intellectual: "apatis"},
        {common: "diam/tetap", intellectual: "stagnan"},
        {common: "memeriksa", intellectual: "menginterogasi"},
        {common: "penampilan", intellectual: "performa"},
        {common: "penemuan", intellectual: "inovasi"},
        {common: "melaksanakan", intellectual: "mengejawantahkan"},
        {common: "pandai berbicara", intellectual: "pandai beretorika"},
        {common: "peraturan", intellectual: "regulasi"},
        {common: "serangan balik", intellectual: "counter attack"},
        {common: "kesalahan besar", intellectual: "blunder"},
        {common: "hak istimewa", intellectual: "hak prerogatif"},
        {common: "ganti rugi", intellectual: "kompensasi"},
        {common: "kata hati", intellectual: "intuisi"},
        {common: "kosong", intellectual: "vakum"},
        {common: "tidak normal", intellectual: "anomali"},
        {common: "upaya/usaha", intellectual: "imisratif"},
        {common: "kenaikan", intellectual: "ekskalasi"},
        {common: "citra diri", intellectual: "personal branding"},
        {common: "keluar dari jalur", intellectual: "off the track"},
        {common: "mempercepat", intellectual: "mengakselerasi"},
        {common: "dugaan", intellectual: "asumsi"},
        {common: "", intellectual: ""},
        {common: "", intellectual: ""},
        {common: "", intellectual: ""},
        {common: "", intellectual: ""},
      ]
    }
  },
  computed: {
    commonWordsSearch() {
      if (this.commonWord) {
        let result = this.wordsList.filter(words => {
          return this.commonWord.toLowerCase().split(' ').every(w =>
              words.common.toLowerCase().includes(w))
        })
        this.intellectualWord = result[0].intellectual
        return result
      } else {
        this.intellectualWord = ''
      }
    }
  },
}
</script>

<style scoped>
.indonesianWords {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(82, 82, 85, 0.5), rgba(82, 82, 85, 0.5)), url("../assets/images/book-dictionnary.jpg");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
}

.indonesianWords .card {
  margin-left: 10em;
  margin-right: 10em;
}

.indonesianWords .input-group {
  width: 70%;
  margin-left: 15%;
}

@media only screen and (max-width: 768px) {
  .indonesianWords .card {
    margin-left: 5px;
    margin-right: 5px;
  }

  .indonesianWords .input-group {
    width: 95%;
    margin-left: 3%;
  }
}
</style>