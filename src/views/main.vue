<template>
  <div>
    <mt-header title="工作台">
      <router-link to="/profile" slot="left">
        我
      </router-link>
    </mt-header>

    <div class="page-wrap">
      <!-- <div class="page-title">Tabbar</div> -->

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="tab_workspace">
        <workspace-view/>
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
import workspaceView from './tabbarviews/workspace'
export default {
  data () {
    return {
      selected: 'tab_workspace', // 这个值最好从历史记录里面读取，这里暂时默认去工作台
      favourites: [
        {title: '今天任务', path: '/tasks/today'},
        {title: '过期任务', path: '/tasks/overdue'},
        {title: '待完成任务', path: '/tasks/unfinished'},
        {title: '已完成任务', path: '/tasks/done'},
        {title: '全部任务', path: '/tasks'}
      ]
    }
  },
  components: {'workspace-view': workspaceView},
  watch: {
    selected: function (val, old) {
      debugger
      console.log('')
    },
    $route () {
      console.log('route change')
    }
  },
  methods: {
    handleProfile () {}
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
</style>
