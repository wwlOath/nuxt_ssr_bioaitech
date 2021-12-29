<template>
  <div>

  </div>
</template>

<style lang="less">

</style>

<script>
  export default {
    name: '',
    data() {
      if(this.$route.query.type == "tissueChip") {
        this.$router.replace({
          path: "/tissueChip",
          query: {
            selected: this.$route.query.selected
          }
        })
      }else if(this.$route.query.type == "organization") {
        this.$router.replace({
          path: "/organizationLibrary",
          query: {
            selected: this.$route.query.selected
          }
        })
      }

      return {
        //msg: 'vue'
      }
    },
    methods: {},
    mounted() {

    }
  }

</script>
