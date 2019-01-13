<template>
  <div id="department_edit">
    <h3>更改大學資料</h3>
    <div class="row">
      <form v-on:submit.prevent="editDepartment" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="D_ID" required>
            <label class="active">科系ID# (Slug) (此為主要鍵，無法更改)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="D_Name" required>
            <label class="active">科系名稱</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="D_Abstract" required>
            <label class="active">科系簡介</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Type" required>
            <label class="active">科系種類</label>
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
  name: "department_edit",
  data() {
    return {
      D_ID: null,
      D_Name: null,
      D_Abstract: null,
      Type: null
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
	editDepartment() {
		db.collection('Department').where('D_ID', '==', this.$route.params.D_ID).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
		    doc.ref.update({
			  D_ID: this.D_ID,
			  D_Name: this.D_Name,
			  Type: this.Type,
			  D_Abstract: this.D_Abstract
			})
			.then(() => {
			  alert("資料更改成功！")
			  this.$router.push({name: 'department_view', params: {D_ID: this.D_ID}})
			})
		  })
	    })
    }
  }
}
</script>