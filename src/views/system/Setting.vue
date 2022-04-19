<template>
  <section>

    <a-card size="small" :bodyStyle="{padding:'6px 18px 18px 18px','min-height':'600px'}" title="系统设置">
      <a-tabs v-model:activeKey="activeKey" size="small" :animated="false">
          <a-tab-pane v-for="(group,index) in configGroupList" :key="index" :tab="group.title">
            <a-form style="margin-top: 18px" class="setting-form" v-bind="formItemLayout">
              <a-form-item v-for="(item,index) in group.list" :key="index" :label="item.name" :name="item.code">
                <quill-editor v-if="item.type==='text'"  style="width: 100%;height: 300px" ref="editor" v-model:content="item.value"  contentType="html" >
                </quill-editor>
                <a-upload
                    v-else-if="item.type==='image'"
                    action="/gateway/upload/File/uploadSingleImage"
                    list-type="picture-card"
                    withCredentials
                    :show-upload-list="false"
                    v-model:file-list="files"
                    @change="handleChange($event,item)"
                >
                  <img width="100" v-if="item.value" :src="item.value" alt="avatar" />
                  <div v-else>
                    <plus-outlined/>
                    <div class="ant-upload-text">上传</div>
                  </div>
                </a-upload>
                <a-input v-else v-model:value="item.value" :suffix="item.explain"/>
              </a-form-item>
              <a-form-item :wrapper-col="buttonItemLayout">
                <a-button type="primary" @click.prevent="onSubmit" :loading="loading">保存</a-button>
              </a-form-item>
            </a-form>
          </a-tab-pane>
      </a-tabs>
    </a-card>

  </section>
</template>

<script>
import {configGroupList, saveConfig} from "@/api/SysConfig";
import {Form, message} from 'ant-design-vue';
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const useForm = Form.useForm;

export default {
  name: "Setting",
  components:{
    QuillEditor
  },
  data() {
    let formState = {}
    return {
      files:[],
      formState: formState,
      form: useForm(formState, {}),
      buttonItemLayout: {
        span: 14,
        offset: 4,
      },
      formItemLayout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      },
      activeKey: 0,
      btnLoading: false,
      configGroupList: [],
    };
  },
  methods: {
    handleChange(info,item){
      console.log(info)
      item.value=info.file.response.data.filePath
    },
    onSubmit(e) {
      let dataFrom = []
      for (const eKeyKey in this.configGroupList[this.activeKey].list) {
        dataFrom.push(this.configGroupList[this.activeKey].list[eKeyKey])
      }
      this.loading = true;
      saveConfig(dataFrom).then(res => {
        this.loading = false;
        if (res.code === 200) {
          message.success('保存成功')
        } else {
          message.error(res.msg)
        }
      })
    }
  },
  created() {

    configGroupList().then(res => {
      for (const configGroupKey in res.data) {
        if (configGroupKey !== '签到设置' && configGroupKey!=='抽奖设置' && configGroupKey!=='分销设置' && configGroupKey!=='支付设置') {
          this.configGroupList.unshift({
            title: configGroupKey,
            list: res.data[configGroupKey]
          })
        }
      }
    })
  }
};
</script>

<style scoped>
.setting-form {
  max-width: 600px;
}
</style>