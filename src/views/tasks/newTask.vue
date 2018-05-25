<template>
  <div>
    <mt-header title="新建任务">
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button slot="right" @click="handleDone">完成</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default{
  data () {
    return {
      task: {

      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleDone () {
      console.log('new task done')
    }
  }
}
</script>
