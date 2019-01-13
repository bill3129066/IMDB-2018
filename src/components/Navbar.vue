<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2 z-depth-3">
      <div class="nav-content">
        <router-link to="/">
          <span class="nav-title">Database</span>
        </router-link>
        <!-- <a href class="btn-floating btn-large halfway-fab pink">
          <router-link to>
            <i class="material-icons">add</i>
          </router-link>123
        </a>-->
      </div>
    </nav>
    <ul id="tabs" class="tabs z-depth-2">
      <li class="tab col s3">
        <a href="#university">查看大學</a>
      </li>
      <li class="tab col s3">
        <a class="active" href="#department">查看科系</a>
      </li>
      <li class="tab col s3">
        <a href="#dept-of-uni">查看大學科系</a>
      </li>
    </ul>
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


.tabs .tab a {
  color: #F9F9F9!important;
}
.tabs {
  text-align:right;
  background-color: #303f9ec4;
}



</style>


