<template>
  <div class="container">
    <h3>오늘 당신이 보고싶은 영화는?</h3>
    <div style="text-align:right;">
      {{ numSelected }} 개 선택
      <br /><br />
    </div>

    <VueMulticlick
      :items="items"
      uid="id"
      @selected="selectedItems = $event"
      v-slot="{
        itemClicked,
        itemIsSelected,
        selectAll,
        selectNone
      }"
    >
      <button @click="selectAll" class="btn btn-warning me-2">전부선택</button>
      <button @click="selectNone" class="btn btn-warning">선택 초기화</button>
      <br /><br />
      <ul>
        <li
          v-for="item in items"
          :key="item.name"
          :class="{ selected: itemIsSelected(item) }"
          @click="itemClicked(item, $event)"
        >
          {{ item.name }}
        </li>
      </ul>
    </VueMulticlick>
    <button @click="getRecommendMovies(selectedItems)" class="btn btn-warning mt-3" >찾기</button>
  </div>
</template>
<script>
import axios from 'axios'
import VueMulticlick from "../dist"
import { mapActions } from 'vuex'
export default {
  components: {
    VueMulticlick
  },
  data() {
    return {
      selectedItems: [],
      // items: []
      items: [
        { name: "비올때", id: 2 },
        { name: "슬플때", id: 3 },
        { name: "기쁠때", id: 4 },
        { name: "코딩하고 싶을때", id: 5 },
        { name: "F", id: 6 },
        { name: "G", id: 7 },
        { name: "H", id: 8 },
        { name: "I", id: 9 },
        { name: "J", id: 10 },
        { name: "반전", id: 11 }
      ]
    };
  },
  computed: {
    numSelected() {
      return this.selectedItems.length;
    }
  },
  methods: {
      ...mapActions(['getRecommendMovies'])
      // console.log(this.selectedItems)
  },
  created() {
    axios.get('http://127.0.0.1:8000/recommends/keywords/')
    .then(res => {
      this.items = res.data.data
    })
  }
};
</script>
<style scoped>
  /* @font-face {
      font-family: 'WandohopeB';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeB.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  } */

  @font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .container {
    font-family: 'Bazzi';
    max-width: 400px;
    width: 100%;
    margin: 50px auto;
    color: rgb(255, 255, 255);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: 1px solid #1d1e1f;
    
  }

  li {
    cursor: pointer;
    border-bottom: 1px solid #1d1e1f;
    padding: 8px 16px;
    user-select: none;
    background-color: #2c2e30;
    border-radius:10em; 
  }

  li:nth-child(odd) {
    background-color: #494848;
  }

  li:last-of-type {
    border-bottom: none;
  }

  li.selected {
    background-color: #ffbb00b2;
    color: #fff;
  }
</style>

