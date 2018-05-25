<template>
  <div>
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

    <p class="left-allign">我的任务</p>
    <ul class="list-container">
      <router-link v-for="item in favourites" :key="item.title" tag="li" :to="item.path">
      <li>{{item.title}}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      favourites: [
        {title: '今天任务', path: '/tasks/today'},
        {title: '过期任务', path: '/tasks/overdue'},
        {title: '待完成任务', path: '/tasks/unfinished'},
        {title: '已完成任务', path: '/tasks/done'},
        {title: '全部任务', path: '/tasks'}
      ]
    }
  }
}
</script>

<style>
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
