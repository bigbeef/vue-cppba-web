<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="昵称">
          <el-input v-model="form.nickName" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="SEO标题">
          <el-input v-model="form.title" placeholder="请输入SEO标题"></el-input>
        </el-form-item>
        <el-form-item label="SEO关键字">
          <el-input v-model="form.keyword" placeholder="请输入SEO关键字"></el-input>
        </el-form-item>
        <el-form-item label="SEO描述">
          <el-input v-model="form.description" placeholder="请输入SEO描述"></el-input>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input v-model="form.remark" placeholder="请输入个人简介" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        form: {
          nickName: '',
          title: '',
          keyword: '',
          description: '',
          remark: ''
        }

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
          if (data.success) {
            this.form = data.data;
          } else {
            this.$message.error(data.msg);
          }
        }, response => {
          this.$message.error('网络繁忙！');
        })
      },
      onSubmit(){
        this.$http({
          method: 'post',
          url: this.SERVERURL + '/admin/user/update',
          headers: {'Authorization': localStorage.getItem("token")},
          params: this.form
        }).then(response => {
          var data = response.data;
          if (data.success) {
            this.$message.success('修改成功！');
          } else {
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
