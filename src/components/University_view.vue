<template>
  <div id="university_view">
    <ul class="colloction with-header">
	  <li class="collection-header"><h4>{{U_Name}}</h4></li>
	  <li class="collection-item">大學ID#: {{U_ID}}</li>
	  <li class="collection-item">大學簡介: {{U_Abstract}}</li>
	  <li class="collection-item">大學學費: ${{Tuition}}</li>
	  <li class="collection-item">大學宿舍費: ${{Dorm_Fee}}</li>
	  <li class="collection-item">大學附近租金: ${{Rent_Fee}}</li>
	  <li class="collection-item">大學地點: {{Location}}</li>
	</ul>
	<router-link to="/university" class="btn grey">Back</router-link>
	<button @click="deleteUniversity()" class="btn red">Delete</button>
	
	<div class="fixed-action-btn">
	  <router-link v-bind:to="{name: 'university_edit', params: {U_ID: U_ID}}" class="btn-floating btn-large red">
	    <i class="material-icons">create</i>
	  </router-link>
	</div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: 'university_view',
  data() {
    return {
	  U_ID: null,
	  U_Name: null,
	  U_Abstract: null,
	  Tuition: null,
	  Dorm_Fee: null,
	  Rent_Fee: null,
	  Location: null
    };
  },
  beforeRouteEnter (to, from, next){
    db.collection('University').where('U_ID', '==', to.params.U_ID).get()
	.then(snapshot => {
      snapshot.forEach(doc => {
        next(vu => {
		  vu.U_ID = doc.data().U_ID,
		  vu.U_Name = doc.data().U_Name,
		  vu.U_Abstract = doc.data().U_Abstract,
		  vu.Tuition = doc.data().Tuition,
		  vu.Dorm_Fee = doc.data().Dorm_Fee,
		  vu.Rent_Fee = doc.data().Rent_Fee,
		  vu.Location = doc.data().Location
		})
	  })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData (){
	  db.collection('University').where('U_ID', '==', this.$route.params.U_ID).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
			this.U_ID = doc.data().U_ID,
			this.U_Name = doc.data().U_Name,
			this.U_Abstract = doc.data().U_Abstract,
			this.Tuition = doc.data().Tuition,
			this.Dorm_Fee = doc.data().Dorm_Fee,
			this.Rent_Fee = doc.data().Rent_Fee,
			this.Location = doc.data().Location
		  })
	    })
	},
	deleteUniversity (){
	  if (confirm('您確定要刪除此筆資料嗎？')){
	    db.collection('University').where('U_ID', '==', this.$route.params.U_ID).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
		    doc.ref.delete()
			alert("資料已刪除！")
			this.$router.push('/university')
		  })
	    })
	  }
	}
  }
}
</script>