<template>
  <div id="department_view">
    <ul class="colloction with-header">
	  <li class="collection-header"><h4>{{D_Name}}</h4></li>
	  <li class="collection-item">Department ID#: {{D_ID}}</li>
	  <li class="collection-item">Department Type: {{Type}}</li>
	  <li class="collection-item">Department Abstract: {{D_Abstract}}</li>
	</ul>
	<router-link to="/Department" class="btn grey">Back</router-link>
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
  method: {
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
	}
  }
}
</script>