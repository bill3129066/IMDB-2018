<template>

  <div id="dept_of_uni">
    <h3>大學科系</h3>
	
	<div class="index container">
      <div class="card" v-for="dept_of_uni in dept_of_unis" :key="dept_of_uni.id">
		
		<router-link class="secondary-content" v-bind:to="{name:'dept_of_uni_view', params:{D_ID: dept_of_uni.D_ID}}" >
		
        <div class="card-content">
          <!-- <i class="material-icons delete" @click="deleteSmoothie(dept_of_uni.id)">delete</i> -->
          <h2 class="indego-text">{{ dept_of_uni.D_Name }}</h2>
        </div>
	   </router-link>
      </div>
	</div>
	
	
	<div class="fixed-action-btn">
	  <router-link to="/dept_of_uni/new" class="btn-floating btn-large red">
	    <i class="material-icons">add</i>
	  </router-link>
	</div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: 'dept_of_uni',
  data() {
    return {
      dept_of_uni: []
    };
  },
  created() {
    // fatch data from the firestore
    db.collection("Dept_of_Uni")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
		  const data = {
		    'id': doc.id,
		    'D_ID': doc.data().D_ID,
			'D_Name': doc.data().D_Name,
			'D_Abstract': doc.data().D_Abstract,
			'Type': doc.data().Type
		  }
		  this.dept_of_unis.push(data)
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