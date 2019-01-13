<template>
  <div id="dept_of_uni_edit">
    <h3>更改大學科系資料</h3>
    <div class="row">
      <form v-on:submit.prevent="editDU" class="col s12">
		<div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="U_ID" required>
            <label class="active">大學ID# (Slug) (此為主要鍵，無法更改)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="D_ID" required>
            <label class="active">科系ID# (Slug) (此為主要鍵，無法更改)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="DU_Name" required>
            <label class="active">大學科系名稱</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Score_GSAT" required>
            <label class="active">大學科系學測分數</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Score_JCEE" required>
            <label class="active">大學科系指考分數</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Feature" required>
            <label class="active">大學科系的特色</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Start_Date" required>
            <label class="active">大學科系的創始年份</label>
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
  name: "dept_of_uni_edit",
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
    db.collection('Dept_of_Uni').where('UD_Name', '==', to.params.UD_Name).get()
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
  methods: {
    fetchData (){
	  db.collection('Dept_of_Uni').where('UD_Name', '==', this.$route.params.UD_Name).get()
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
	},
	editDU() {
		db.collection('Dept_of_Uni').where('UD_Name', '==', this.$route.params.UD_Name).get()
		.then(snapshot => {
		  snapshot.forEach(doc => {
		    doc.ref.update({
			  U_ID: this.U_ID,
			  D_ID: this.D_ID,
			  DU_Name: this.DU_Name,
			  Score_GSAT: this.Score_GSAT,
			  Score_JCEE: this.Score_JCEE,
			  Feature: this.Feature,
			  Start_Date: this.Start_Date
			})
			.then(() => {
			  alert("資料更改成功！")
			  this.$router.push({name: 'dept_of_uni_view', params: {UD_Name: this.UD_Name}})
			})
		  })
	    })
    }
  }
}
</script>