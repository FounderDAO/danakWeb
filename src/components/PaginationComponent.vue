<template>
    <ul class="pagination mt-3">
        <li><a href="#" class="prev"><Prev</a></li>
        <li class="pageNumber active"><a href="#">1</a></li>
        <li class="pageNumber"><a href="#">2</a></li>
        <li class="pageNumber"><a href="#">3</a></li>
        <li class="pageNumber"><a href="#">4</a></li>
        <li class="pageNumber"><a href="#">5</a></li>
        <li class="pageNumber"><a href="#">6</a></li>
        <li><a href="#" class="next"> {{ $t("next") }}  ></a></li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

ul {
  background: #fff;
  display: flex;
  padding: 6px 18px;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-top: 1rem;
}

ul li {
  list-style: none;
  margin: 0 5px;
}

ul li.pageNumber {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

ul li a {
  display: block;
  text-decoration: none;
  color: #383838;
  font-weight: 600;
  border-radius: 50%;
}

ul li.pageNumber:hover a,
ul li.pageNumber.active a {
  background: #383838;
  color: #fff !important;
}

ul li:first-child {
  margin-right: 30px;
  font-weight: 700;
  font-size: 20px;
}

ul li:last-child {
  margin-left: 30px;
  font-weight: 700;
  font-size: 20px;
}
</style>