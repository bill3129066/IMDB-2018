<template>
  <div class="index container">
    <!-- <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indego-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>-->
    <div class="row align-items-center">
      <div class="col-6 mx-auto col-md-6 order-md-2">
		<p><img
          alt="Logo"
          class="img-fluid mx-auto d-block mb-3 mb-md-0"
          src="https://www.ntu.edu.tw/images/inner/emblem_1.png"
		  align="left"
        >做出我們應盡的心力。大學是人生中至關重要的一個選擇，它深深影響了大多數人的人生軌跡，小至大學生涯的生活環境、大至未來後半</p>
      </div>
      <div class="col-md-6 order-md-1 text-left text-md-left pr-md-5">
        <h1 class="mb-3">新世代大學科系資訊系統</h1>
        <p
          class="lead"
         
        >大學是人生中至關重要的一個選擇，它深深影響了大多數人的人生軌跡，小至大學生涯的生活環境、大至未來後半生的工作都有可能因為我們在 18 歲時的那個選擇而有著大大的不同。</p>
        <p class="lead mb-3">
          但一件這麼重要的事情卻常常不受到重視，導致高中生最終最初了一個讓自己後悔的決定，而我們在看到了許多沈重的例子後決定站出來，改變這個現狀。
        </p>
        <p class="mb-2 text-muted">
          <a href="https://getbootstrap.com/docs/4.0">新世代大學索引</a> is the world's most popular framework for searching university and its relatives' sites.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
