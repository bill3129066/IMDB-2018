<template>
  <div id="dept_of_uni_new">
    <h3>新增大學科系資料</h3>
    <div class="row">
      <form v-on:submit.prevent="addDept_of_Uni" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="U_ID" required>
            <label class="active">大學ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="D_ID" required>
            <label class="active">科系ID#</label>
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
        <router-link to="/dept_of_uni" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "dept_of_uni_new",
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
  methods: {
    addDept_of_Uni() {
			db.collection("Dept_of_Uni").add({
          U_ID: this.U_ID,
          D_ID: this.D_ID,
          DU_Name: this.DU_Name,
          Score_GSAT: this.Score_GSAT,
          Score_JCEE: this.Score_JCEE,
          Feature: this.Feature,
          Start_Date: this.Start_Date
        })
        .then(docRef => this.$router.push("/dept_of_uni"))
        .catch(error => console.log(err));
		alert("資料創建成功！")
    }
  }
}
</script>