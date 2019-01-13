<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2 z-depth-3">
      <div class="nav-content">
        <router-link to="/">
            <img src="./assets/logo.png" height="30" alt>
          <span class="nav-title">新世代大學索引</span>
        </router-link>
        <div class="input-field col s6 s12 red-text">
          <i class="red-text material-icons prefix">search</i>
          <input
            type="text"
            placeholder="search"
            id="autocomplete-input"
            class="autocomplete red-text"
          >
        </div>
        <!-- add button -->
        <!-- <a href class="btn-floating btn-large halfway-fab pink">
          <router-link to>
            <i class="material-icons">add</i>
          </router-link>123
        </a>-->
      </div>
    </nav>
    <ul id="tabs" class="tabs z-depth-2">
      <li class="tab col s3">
        <router-link to="/university">
          <a class="active">查看大學</a>
        </router-link>
      </li>
      <li class="tab col s3">
        <router-link to="/department">查看科系</router-link>
      </li>
      <li class="tab col s3">
        <router-link to="/dept_of_uni">查看大學科系</router-link>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "Navbar",
  data() {
    return {
	};
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}

.tabs .tab a {
  color: #f9f9f9 !important;
}
.tabs {
  text-align: right;
  background-color: #303f9ec4;
}
</style>


