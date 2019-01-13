<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title">Database</span>
        </router-link>
        <!-- <a href class="btn-floating btn-large halfway-fab pink">
          <router-link to>
            <i class="material-icons">add</i>
          </router-link>
        </a>-->
      </div>
    </nav>
    <a href class="btn-large halfway-fab pink">
      <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3">
            <a href="#university">
              <i class="material-icons">add</i>University
            </a>
          </li>
          <li class="tab col s3">
            <a class="active" href="#test2">
              <i class="material-icons">add</i>Test 2
            </a>
          </li>
          <li class="tab col s3">
            <a href="#test3">
              <i class="material-icons">add</i>Test 3
            </a>
          </li>
        </ul>
      </div>
    </div>
    </a>
    
  </div>
</template>



<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>


