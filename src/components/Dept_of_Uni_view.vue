<template>
  <div id="dept_of_uni_view">
    <ul class="colloction with-header">
	  <li class="collection-header"><h4>{{DU_Name}}</h4></li>
	  <li class="collection-item">大學ID#: {{U_ID}}</li>
	  <li class="collection-item">科系ID#: {{D_ID}}</li>
	  <li class="collection-item">學測分數: {{Score_GSAT}}</li>
	  <li class="collection-item">指考分數: {{Score_JCEE}}</li>
	  <li class="collection-item">大學科系特色: {{Feature}}</li>
	  <li class="collection-item">大學科系創始年份: {{Start_Date}}</li>
	</ul>
	<router-link to="/dept_of_uni" class="btn grey">Back</router-link>
	<!-- <button @click="deleteUniversity()" class="btn red">Delete</button>
	
	<div class="fixed-action-btn">
	  <router-link v-bind:to="{name: 'university_edit', params: {U_ID: U_ID}}" class="btn-floating btn-large red">
	    <i class="material-icons">create</i>
	  </router-link>
	</div> -->
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: 'dept_of_uni_view',
  data() {
    return {
	  U_ID: null,
	  D_ID: null,
	  DU_Name: null,
	  Score_GSAT: null,
	  Score_JCEE: null,
	  Feature: null,
	  Start_Date: null
    };
  },
  beforeRouteEnter (to, from, next){
    db.collection('Dept_of_Uni').where('DU_Name', '==', to.params.DU_Name).get()
	.then(snapshot => {
      snapshot.forEach(doc => {
        next(vu => {
		  vu.U_ID = doc.data().U_ID,
		  vu.D_ID = doc.data().D_ID,
		  vu.DU_Name = doc.data().DU_Name,
		  vu.Score_GSAT = doc.data().Score_GSAT,
		  vu.Score_JCEE = doc.data().Score_JCEE,
		  vu.Feature = doc.data().Feature,
		  vu.Start_Date = doc.data().Start_Date
		})
	  })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  method: {
    fetchData (){
	  db.collection('Dept_of_Uni').where('DU_Name', '==', this.$route.params.DU_Name).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
			this.U_ID = doc.data().U_ID,
			this.D_ID = doc.data().D_ID,
			this.DU_Name = doc.data().DU_Name,
			this.Score_GSAT = doc.data().Score_GSAT,
			this.Score_JCEE = doc.data().Score_JCEE,
			this.Feature = doc.data().Feature,
			this.Start_Date = doc.data().Start_Date
		  })
	    })
	}
  }
}
</script>