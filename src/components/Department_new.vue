<template>
  <div id="department_new">
    <h3>新增科系資料</h3>
    <div class="row">
      <form v-on:submit.prevent="addDepartment" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="D_ID" required>
            <label class="active">科系ID# (Slug)</label>
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
        <router-link to="/department" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "department_new",
  data() {
    return {
      D_ID: null,
      D_Name: null,
      D_Abstract: null,
      Type: null
    };
  },
  methods: {
    addDepartment() {
			db.collection("Department").add({
          D_ID: this.D_ID,
          D_Name: this.D_Name,
          D_Abstract: this.D_Abstract,
          Type: this.Type
        })
        .then(docRef => this.$router.push("/department"))
        .catch(error => console.log(err));
		alert("資料創建成功！")
    }
  }
}
</script>