<template>
  <div>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
        getUserInfo(){
          this.$http({
            method: 'post',
            url: this.SERVERURL + '/admin/user/get',
            headers: {'Authorization': localStorage.getItem("token")}
          }).then(response => {
            var data = response.data;
            if(data.success){

            }else{
              this.$message.error(data.msg);
            }
          }, response => {
            this.$message.error('网络繁忙！');
          })
        }
    },
    created(){
      this.getUserInfo();
    }
  }
</script>

<style>

</style>
