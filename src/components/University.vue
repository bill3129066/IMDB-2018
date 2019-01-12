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