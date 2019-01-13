<template>
  <div id="university_view">
    <h3>View</h3>
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
  method: {
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
	}
  }
}
</script>