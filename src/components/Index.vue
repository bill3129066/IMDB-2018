<template>
  <div class="index container">
    <!-- <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indego-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>-->
    <div class="row align-items-center">
      <div class="col-6 mx-auto col-md-6 order-md-2">
        <img
          alt="Logo"
          class="img-fluid mx-auto d-block mb-3 mb-md-0"
          src="https://bootstrap-vue.js.org/_nuxt/img/icon.f0a8c9e.png"
        >
      </div>
      <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
        <h1 class="mb-3">Bootstrap + Vue</h1>
        <p
          class="lead"
         
        >Build responsive, mobile-first projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap V4.</p>
        <p class="lead mb-3">
          <span class="bd-text-purple-bright">Bootstrap-Vue</span> provides one of the most comprehensive implementations
          of
          <span class="bd-text-purple-bright">Bootstrap V4</span> components and grid system available for Vue.js 2.4+,
          complete with extensive and automated WAI-ARIA accessibility markup.
        </p>
        <p class="mb-2 text-muted">
          <a href="https://getbootstrap.com/docs/4.0">Bootstrap 4</a> is the world's most popular framework for building responsive, mobile-first sites.
        </p>
        <p class="mb-4 text-muted">
          <a href="https://vuejs.org">Vue.js</a> (pronounced /vjuË, like view) is a progressive framework for building user interfaces.
        </p>
        <div class="d-flex flex-column flex-md-row lead mb-3">
          <a href="/docs" class="btn mb-3 mb-md-0 mr-md-3 btn-bd-primary btn-lg" target="_self">Get started</a>
          <a
            href="https://github.com/bill3129066/IMDB-2018" class="btn btn-outline-secondary btn-lg" target="_blank" rel="noopener"
          >Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Index",
  data() {
    return {
      smoothies: []
    };
  },
  created() {
    // fatch data from the firestore
    db.collection("smoothies")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
        });
      });
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != id;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}

.index .ingredients li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
