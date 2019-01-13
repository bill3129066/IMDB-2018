<template>

  <div id="university">
    <ul class="collection with-header">
	  <li
	  class="collection-header"><h4>University</h4></li>
	  <li v-for="university in universities" 
	  v-bind:key="university.id" 
	  class="collection-item">
	    {{university.U_ID}}:{{university.U_Name}}
	  </li>
	</ul>
	
	<div class="index container">
      <div class="card" v-for="university in universities" :key="university.id">
        <div class="card-content">
          <i class="material-icons delete" @click="deleteSmoothie(university.id)">delete</i>
          <h2 class="indego-text">{{ university.U_Name }}</h2>
          <!--<ul class="ingredients">
            <li v-for="(ing, index) in smoothie.ingredients" :key="index">
              <span class="chip">{{ ing }}</span>
            </li>
          </ul>-->
        </div>
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
  name: 'university',
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
			'U_Name': doc.data().U_Name
		  }
		  this.universities.push(data)
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