<template>
  <div id="university_new">
    <h3>新增大學資料</h3>
    <div class="row">
      <form v-on:submit.prevent="addUniversity" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="U_ID" required>
            <label>University ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="U_Name" required>
            <label>University Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="U_Abstract" required>
            <label>University Abstract</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Tuition" required>
            <label>University Tuition</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Dorm_Fee" required>
            <label>Fee of University's Dorm</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Rent_Fee" required>
            <label>Fee of Renting around University</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Location" required>
            <label>University Location</label>
          </div>
        </div>
        <!-- <button type="submit" class="btn">Submit</button> -->
        <input type="submit" class="btn btn-primary" value="Submit">
        <router-link to="/university" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "university_new",
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
  methods: {
    addUniversity() {
			db.collection("University").add({
          U_ID: this.U_ID,
          U_Name: this.U_Name,
          U_Abstract: this.U_Abstract,
          Tuition: this.Tuition,
          Dorm_Fee: this.Dorm_Fee,
          Rent_Fee: this.Rent_Fee,
          Location: this.Location
        })
        .then(docRef => this.$router.push("/university"))
        .catch(error => console.log(err));
    }
  }
}
</script>