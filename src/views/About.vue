<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        v-for="(item, index) in accor"
        :key="index"
        :title="item.title"
        :name="index.toString()"
      >
        {{ item.content }}
      </van-collapse-item>
    </van-collapse>
    <div class="item">
      <div>
        <img src="../assets/logo.png" />
      </div>
      <div>
        <span>demo图片</span>
      </div>
    </div>
    <div style="display: flex;justify-content:center">
      <div class="test"></div>
      <!-- <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test1" style=""></div> -->
    </div>
    <div class="cycle">
      <div>
        <van-circle v-model="currentRate" :rate="rate" :speed="100" :text="text" class='cy'/>
      </div>
      <div>
        <van-button plain type="info" size="small" @click="add" style="margin-right:10px">add</van-button>
        <van-button plain type="info" size="small" @click="reduce">reduce</van-button>
      </div>

    </div>
    <!-- <Cycle></Cycle> -->
  </div>
</template>
<script>
import Cycle from '@/views/cycle';
export default {
  components:{
    Cycle
  },
  data() {
    return {
      activeName: '0',
      accor: [
        {
          title: "有赞微商城",
          content: "提供多样店铺模板，快速搭建网上商城1",
        },
        {
          title: "有赞微商城",
          content: "提供多样店铺模板，快速搭建网上商城2",
        },
        {
          title: "有赞微商城",
          content: "提供多样店铺模板，快速搭建网上商城3",
        },
      ],
      currentRate: 20,
      rate: 50
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
  },
  methods: {
    add(){
      this.rate = Math.min( this.rate += 10 , 100 )
    },
    reduce(){
      this.rate = Math.max( this.rate -= 10 , 0 )
    }
  },
  created() {},
};
</script>
<style scoped>
h1 {
  font-size: 16px;
}
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 14px;
}
.test {
  width: 50px;
  height: 100px;
  background: pink;
}
.test1 {
  width: 25px;
  height: 100px;
  background: pink;
}
.cy{
  width: 50px!important;
  height: 50px!important;
}
.cycle{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
