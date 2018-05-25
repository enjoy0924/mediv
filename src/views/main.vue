<template>
  <div>
    <mt-header title="工作台">
      <router-link to="/" slot="left">
        <mt-button @click="handleProfile">我</mt-button>
      </router-link>
    </mt-header>

    <div class="page-wrap">
      <!-- <div class="page-title">Tabbar</div> -->

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="tab_workspace">
        <p class="left-allign">快速新建</p>
        <ul class="list-container">
          <router-link tag="li" to="/new/task">
            <li>任务
              <mt-badge type="warning">10</mt-badge>
            </li>
          </router-link>
          <router-link tag="li" to="/new/program">
            <li>项目
            </li>
          </router-link>
        </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab_program">
          <!-- <mt-cell v-for="n in 5" :key="n" :title="'订单 ' + n" /> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="tab_message">
          <!-- <mt-cell v-for="n in 7" :key="n" :title="'发现 ' + n" /> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="tab_contact">
          <!-- <mt-cell v-for="n in 12" :key="n" :title="'我的 ' + n" /> -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab_workspace">
        <img slot="icon" src="../assets/100x100.jpg">
        {{$t('label.workspace')}}
      </mt-tab-item>
      <mt-tab-item id="tab_program">
        <img slot="icon" src="../assets/100x100.jpg">
        {{$t('label.program')}}
      </mt-tab-item>
      <mt-tab-item id="tab_message">
        <img slot="icon" src="../assets/100x100.jpg">
        {{$t('label.message')}}
      </mt-tab-item>
      <mt-tab-item id="tab_contact">
        <img slot="icon" src="../assets/100x100.jpg">
        {{$t('label.contact')}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    handleProfile () {

    }
  }
}
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .left-allign
  {
    position:absolute;
    left:0px;
  }
  .list-container{
    display:  flex;
    margin-top: 80px;
    list-style:  none;
    flex-wrap: wrap;
    border:  1px solid;
  }
  .list-container > li{
    width: 114px;
    margin: 10px;
    height: 61px;
  }
</style>
