<template>
    <div class="main-page container">
        <h2>《科系系》- 新世代大學科系資訊提供者</h2>
        <p>
            <h4>故事起源</h4>
            大學是人生中至關重要的一個選擇，它深深影響了大多數人的人生軌跡，小至大學生涯的生活環境、大至未來後半生的工作都有可能因為我們在 18 歲時的那個選擇而有著大大的不同。<br>
            但一件這麼重要的事情卻常常不受到重視，導致高中生最終最初了一個讓自己後悔的決定，而我們在看到了許多沈重的例子後決定站出來，改變這個現狀。
        </p>
        <p>
            <h4>現行制度哪裡出了問題？</h4>
            我們研究發現在高中三年中，大多數高中生都集中在高三下考完試後的幾個星期才展開生涯探索，其他幾乎所有的時間都拿來學習學校的課業以及經營課外活動。<br>
            但是要在這短短的幾週內就找到適合自己得科系絕非一件易事，曾經就有一份報導說到近四成大學生都希望選讀與現在不同的科系。<br>
            根據我們的調查發現學校的生涯規劃課程因為時間不夠充足，大多採取廣而不深的策略，讓學生能對於不同類組有概略的瞭解，但事實上各類組下面個科系相差甚鉅，科系名稱相差一個字可能課程內容與未來出路就差了十萬八千里，而市面上紙本以及線上科系資料多以受訪者視角出發，導致過於片面且冗長，網路上的官方資料也多以宣傳系所的角度出發，會有隱惡揚善的問題。
        </p>
        <p>
            <h4>解決方式</h4>
            我們透過訪談極端使用者（重考生、轉系生以及對現在科系感到不滿的人）從他們的視角找出了他們在選擇大學科系時重視的資訊，並至做出科系百科的
            prototype，並透過實際進班做使用者訪談修正內容綱要，期待整理出一份真正對高中生有幫助的科系百科。
        </p>

        <div class="photos">
            <img class="div1" src="./assets/img1.jpg">
            <img class="div2" src="./assets/img2.jpg">
        </div>

        <p>  </p>

        <a href="https://github.com/bill3129066/IMDB-2018" class="btn btn-outline-secondary btn-lg github-link z-depth-3" target="_blank"
            rel="noopener">Github</a>

        <p>　</p>
    </div>
</template>

<script>
    import db from "@/firebase/init";
</script>

<style>
    .photos {
        display: flex;
    }

    .div1 {
        width: 50%;
        height: 250px;
        flex: 1;
        padding: 5px;
    }

    .github-link {
        width: 100%;
        padding-block-end: 30px;
        align-content: center;
    }

    .get-start {
        align-items: center;
    }

    .div2 {
        width: 50%;
        height: 250px;
        flex: 1;
        padding: 5px;
    }

    h2 {
        color: #303f9ec4;
    }
</style>