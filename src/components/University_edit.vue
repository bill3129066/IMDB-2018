<template>
  <div id="university_edit">
    <h3>更改大學資料</h3>
    <div class="row">
      <form v-on:submit.prevent="editUniversity" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="U_ID" required>
            <label class="active">大學ID# (此為主要鍵，無法更改)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="U_Name" required>
            <label class="active">大學名稱</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="U_Abstract" required>
            <label class="active">大學簡介</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Tuition" required>
            <label class="active">大學學費</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Dorm_Fee" required>
            <label class="active">大學宿舍費</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Rent_Fee" required>
            <label class="active">大學附近租金</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Location" required>
            <label class="active">大學位置</label>
          </div>
        </div>
        <!-- <button type="submit" class="btn">Submit</button> -->
        <input type="submit" class="btn btn-primary" value="Submit">
		<input type=button class="btn grey" value="Cancel" onclick="window.history.go(-1)">
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "university_edit",
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
	editUniversity() {
		db.collection('University').where('U_ID', '==', this.$route.params.U_ID).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
		    doc.ref.update({
			  U_ID: this.U_ID,
              U_Name: this.U_Name,
			  U_Abstract: this.U_Abstract,
			  Tuition: this.Tuition,
              Dorm_Fee: this.Dorm_Fee,
              Rent_Fee: this.Rent_Fee,
              Location: this.Location
			})
			.then(() => {
			  alert("資料更改成功！")
			  this.$router.push({name: 'university_view', params: {U_ID: this.U_ID}})
			})
		  })
	    })
    }
  }
}
</script>