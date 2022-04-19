<template>
  <a-page-header title="基础设置">
    <div>
      <a-form
          :model="formState"
          layout="vertical"
          name="basic"
          :label-col="{ style: {
          width: '100px',
        } }"
          :wrapper-col="{ style: {
          'max-width': '320px',
        } }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="姓名/昵称"
            name="name"
            :rules="[{ required: false, message: '请输入姓名或昵称' }]"
        >
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item
            label="手机号"
            name="phone"
            :rules="[{ type: 'num',required: false, message: '请输入正确的手机号' }]"
        >
          <a-input v-model:value="formState.phone"/>
        </a-form-item>
        <a-form-item
            label="邮箱"
            name="email"
            :rules="[{ type: 'email',required: false, message: '请输入正确的邮箱格式' }]"
        >
          <a-input v-model:value="formState.email"/>
        </a-form-item>
        <a-form-item
            label="个人资料"
            name="profile"
        >
          <a-textarea :auto-size="{ minRows: 4, maxRows: 6 }" v-model:value="formState.profile" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
      <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
        <template #icon>
          <AntDesignOutlined />
        </template>
      </a-avatar>
    </div>

  </a-page-header>
</template>
<script>
import {defineComponent, reactive} from 'vue';

export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },

});
</script>