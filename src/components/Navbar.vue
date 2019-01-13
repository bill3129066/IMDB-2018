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
        <a href class="halfway-fab indigo darken-2 nav-extended">
          <ul id="tabs-swipe-demo" class="tabs">
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
        </a>
      </div>
    </nav>
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


