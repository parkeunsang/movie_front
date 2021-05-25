<template>
  <div class="container">
    <h3>영화추천서비스</h3>
    <p>오늘 당신이 보고싶은 영화는?</p>
    <div>
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
      <button @click="selectAll">전부선택</button>
      <button @click="selectNone">선택 초기화</button>
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
    <button @click="submitData">찾기</button>
  </div>
</template>
<script>
import VueMulticlick from "../dist";
export default {
  components: {
    VueMulticlick
  },
  data() {
    return {
      selectedItems: [],
      items: [
        { name: "반전", id: 1 },
        { name: "비올때", id: 2 },
        { name: "슬플때", id: 3 },
        { name: "기쁠때", id: 4 },
        { name: "코딩하고 싶을때", id: 5 },
        { name: "F", id: 6 },
        { name: "G", id: 7 },
        { name: "H", id: 8 },
        { name: "I", id: 9 },
        { name: "J", id: 10 }
      ]
    };
  },
  computed: {
    numSelected() {
      return this.selectedItems.length;
    }
  },
  methods: {
    submitData(){
      console.log(this.selectedItems)
    }
  }
};
</script>
<style scoped>
  @font-face {
      font-family: 'WandohopeB';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeB.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  .container {
    font-family: 'WandohopeB';
    max-width: 400px;
    width: 100%;
    margin: 50px auto;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: 1px solid #ececec;
  }

  li {
    cursor: pointer;
    border-bottom: 1px solid #ececec;
    padding: 8px 16px;
    user-select: none;
  }

  li:nth-child(odd) {
    background-color: #f5f5f5;
  }

  li:last-of-type {
    border-bottom: none;
  }

  li.selected {
    background-color: #f0b208;
    color: #fff;
  }
</style>

