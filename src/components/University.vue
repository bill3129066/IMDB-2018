<template>
  <div id="university">
    <h3>大學</h3>
    <div class="index container">
      <div class="card" v-for="university in universities" :key="university.id">
        <router-link

          v-bind:to="{name:'university_view', params:{U_ID: university.U_ID}}"
        >
          <div class="card-content">
            <!-- <i class="material-icons delete" @click="deleteSmoothie(university.id)">delete</i> -->
            <h2 class="indego-text">{{ university.U_Name }}</h2>
          </div>
        </router-link>
      </div>
    </div>

    <div class="fixed-action-btn">
      <router-link to="/university/new" class="btn-floating btn-large red">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "university",
  data() {
    return {
      universities: []
    };
  },
  created() {
    // fatch data from the firestore
    db.collection("University")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'U_ID': doc.data().U_ID,
            'U_Name': doc.data().U_Name,
            'U_Abstract': doc.data().U_Abstract,
            'Tuition': doc.data().Tuition,
            'Dorm_Fee': doc.data().Dorm_Fee,
            'Rent_Fee': doc.data().Rent_Fee,
            'Location': doc.data().Location
          };
          this.universities.push(data);
        });
      });
  }
};
</script>

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

.index li {
  display: inline-block;
}


</style>