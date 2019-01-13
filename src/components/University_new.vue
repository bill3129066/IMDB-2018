<template>
  <div id="university_new">
    <h3>Create a new university</h3>
	<div class="row">
	  <form @submit.prevent="saveUniversity" class="col s12">
	    <div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
		<div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
		<div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
		<div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
		<div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
		<div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
		<div class="row">
		  <div class="input-field col s12">
		    <input type="text" v-model="U_ID" required>
			<label>University ID#</label>
		  </div>
		</div>
	  </form>
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