<template>
  <a-card title="客服设置">
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="客服地址">
        <a-textarea
            v-model:value="formState.customer1"
            placeholder="请填入客服代码"
            :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </a-form-item>
<!--      <a-form-item label="客服二">-->
<!--        <a-textarea-->
<!--            v-model:value="formState.customer2"-->
<!--            placeholder="请填入客服代码"-->
<!--            :auto-size="{ minRows: 2, maxRows: 5 }"-->
<!--        />-->
<!--      </a-form-item>-->
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">保存</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import {loginUser, saveCustomer} from "@/api/SysUser";
import {message} from "ant-design-vue";

export default {
  name: "Customer",
  data(){
    return{
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
      formState:{},
    }
  },
  created() {
    loginUser().then(res=>{
      this.formState = res.data
    })
  },
  methods:{
    onSubmit(){
      saveCustomer(this.formState).then(res=>{
        if (res.code===200){
          message.success("保存成功")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>