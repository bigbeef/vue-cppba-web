<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章类别</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin: 15px 0px;width: 200px;float: none;">
      <el-input placeholder="请输入内容" v-model="name">
        <el-button slot="append" icon="search" @click="listArticleClass()"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="100"></el-table-column>
      <el-table-column prop="name" label="标题" width="500"></el-table-column>
      <el-table-column prop="sort" label="序号" width="100"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        pageNumber: 1,
        pageSize: 15,
        name: ''
      };
    },
    methods: {
      listArticleClass(){
        this.$http({
          method: 'post',
          url: '/admin/articleClass/page',
          params: {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            name: this.name
          }
        }).then(response => {
          var data = response.data;
          if (data.success) {
            this.tableData = data.data.content;
          } else {
            this.$message.error(data.msg);
          }
        }, response => {
          this.$message.error('网络繁忙！');
        })
      },
      handleEdit(){

      },
      handleDelete(){

      }
    },
    created(){
      this.listArticleClass();
    }
  }
</script>

<style>

</style>
