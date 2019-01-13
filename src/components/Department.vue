<template>
  <div id="department">
    <h3>科系</h3>
    <div class="input-field col s6 s12 red-text">
      <i class="red-text material-icons prefix">search</i>
      <input
        type="text"
        v-model="search"
        placeholder="search school"
        id="autocomplete-input"
        class="autocomplete red-text"
      >
    </div>
    <div class="index container">
      <div class="card" v-for="department in filteredDepartments" :key="department.id">
        <router-link v-bind:to="{name:'department_view', params:{D_ID: department.D_ID}}">
          <div class="card-content">
            <!-- <i class="material-icons delete" @click="deleteSmoothie(department.id)">delete</i> -->
            <h2 class="indego-text">{{ department.D_Name }}</h2>
          </div>
        </router-link>
      </div>
    </div>

    <div class="fixed-action-btn">
      <router-link to="/department/new" class="btn-floating btn-large red">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "department",
  data() {
    return {
      departments: [],
      search: ""
    };
  },
  created() {
    // fatch data from the firestore
    db.collection("Department")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            id: doc.id,
            D_ID: doc.data().D_ID,
            D_Name: doc.data().D_Name,
            D_Abstract: doc.data().D_Abstract,
            Type: doc.data().Type
          };
          this.departments.push(data);
        });
      });
  },
  computed: {
    filteredDepartments: function() {
      return this.departments.filter(department => {
        return department.D_Name.match(this.search);
      });
    }
  }
};
</script>

<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}

.index .ingredients li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>