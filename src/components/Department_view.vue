<template>
  <div id="department_view">
    <ul class="colloction with-header">
	  <li class="collection-header"><h4>{{D_Name}}</h4></li>
	  <li class="collection-item">科系ID# (Slug): {{D_ID}}</li>
	  <li class="collection-item">科系種類: {{Type}}</li>
	  <li class="collection-item">科系簡介: {{D_Abstract}}</li>
	</ul>
	<router-link to="/Department" class="btn grey">Back</router-link>
	<button @click="deleteDepartment()" class="btn red">Delete</button>
	
	<div class="fixed-action-btn">
	  <router-link v-bind:to="{name: 'department_edit', params: {D_ID: D_ID}}" class="btn-floating btn-large red">
	    <i class="material-icons">create</i>
	  </router-link>
	</div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: 'department_view',
  data() {
    return {
	  D_ID: null,
	  D_Name: null,
	  Type: null,
	  D_Abstract: null
    };
  },
  beforeRouteEnter (to, from, next){
    db.collection('Department').where('D_ID', '==', to.params.D_ID).get()
	.then(snapshot => {
      snapshot.forEach(doc => {
        next(vu => {
		  vu.D_ID = doc.data().D_ID,
		  vu.D_Name = doc.data().D_Name,
		  vu.Type = doc.data().Type,
		  vu.D_Abstract = doc.data().D_Abstract
		})
	  })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData (){
	  db.collection('Department').where('D_ID', '==', this.$route.params.D_ID).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
			this.D_ID = doc.data().D_ID,
			this.D_Name = doc.data().D_Name,
			this.Type = doc.data().Type,
			this.D_Abstract = doc.data().D_Abstract
		  })
	    })
	},
	deleteDepartment (){
	  if (confirm('您確定要刪除此筆資料嗎？')){
	    db.collection('Department').where('D_ID', '==', this.$route.params.D_ID).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
		    doc.ref.delete()
			alert("資料已刪除！")
			this.$router.push('/department')
		  })
	    })
	  }
	}
  }
}
</script>