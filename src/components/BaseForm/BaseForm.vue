<template>
  <a-modal width="800px" v-model:visible="mVisible" :title="title" @cancel="cancel" :confirm-loading="confirmLoading" @ok="onSubmit" destroyOnClose>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <template v-for="(column,index) in columnsData" :key="index">
        <a-form-item v-if="column.type === 'input'" :label="column.title">
          <a-input v-model:value="formState[column.key]"/>
        </a-form-item>
        <a-form-item v-if="column.type === 'textarea'" :label="column.title">
          <a-textarea autoSize v-model:value="formState[column.key]"/>
        </a-form-item>
        <a-form-item v-if="column.type === 'richText'" :label="column.title">
          <quill-editor  @ready="editReady($event,formState[column.key])" ref="editor" toolbar="full" :modules="modules" style="height: 300px" contentType="html" v-model:content="formState[column.key]">
          </quill-editor>
        </a-form-item>
        <a-form-item v-else-if="column.type === 'select'" :label="column.title">
          <a-select v-model:value="formState[column.key]">
            <a-select-option v-for="(item,index) in column.options" :key="index" :value="item.value">{{item.label}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-else-if="column.type === 'radio'" :label="column.title">
          <a-radio-group v-model:value="formState[column.key]" :options="column.options">
          </a-radio-group>
        </a-form-item>
        <a-form-item v-else-if="column.type === 'datetime'" :label="column.title">
          <a-date-picker
              style="width: 100%;"
              valueFormat="YYYY-MM-DD HH:mm:ss"
              v-model:value="formState[column.key]"
              format="YYYY-MM-DD HH:mm:ss"
              :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
          />
        </a-form-item>
        <a-form-item v-else-if="column.type === 'upload'" :label="column.title">
          <a-upload
              action="/gateway/system/sysAttachment/upload"
              list-type="picture-card"
              withCredentials
              v-model:file-list="formState[column.key]"
          >
            <div v-if="!formState[column.key] || formState[column.key].length===0">
              <plus-outlined/>
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </a-form-item>
      </template>
    </a-form>
  </a-modal>
</template>

<script>
import { PlusOutlined} from '@ant-design/icons-vue';
import moment from 'moment';
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImageUploader from 'quill-image-uploader'
import {uploadSingleImage} from "@/api/UploadFile";

export default {
  name: "BaseForm",
  props: {
    visible:{
      type:Boolean,
      default: function (){
        return false
      }
    },
    confirmLoading:{
      type:Boolean,
      default: function (){
        return false
      }
    },
    title: {
      default: "Form"
    },
    columns: {
      type: Array,
      default: function (){
        return []
      }
    },
    formData:{
      type: Object,
      default: function () {
        return {

        }
      }
    }
  },
  components:{
    PlusOutlined,
    QuillEditor
  },
  data() {
    return {
      modules:[{
        name: 'imageUploader',
        module: ImageUploader,
        options: {
          upload: (file) => {
            console.log(file)
            return new Promise((resolve, reject) => {
              uploadSingleImage({file:file}).then(res=>{
                resolve(
                    res.data.filePath
                );
              })

            });

          }
        }
      }],
      moment,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
      formState:{},
      mVisible:this.visible,
      uploadKeyList:[],
    }
  },
  created() {
  },
  watch:{
    visible(value){
      this.mVisible = value
    },
    formData(value){
      this.uploadKeyList=  this.columns.filter(function (item) {
        return item.type==='upload';
      }).map(q=>q.key)
      for (const valueKey in this.uploadKeyList) {
        if (value[this.uploadKeyList[valueKey]] && !(value[this.uploadKeyList[valueKey]] instanceof Array) && value[this.uploadKeyList[valueKey]].length>0){
          value[this.uploadKeyList[valueKey]] = [{id:value[this.uploadKeyList[valueKey]],uid:value[this.uploadKeyList[valueKey]],url:value[this.uploadKeyList[valueKey]]}]
        }
      }
      this.formState = value
    }
  },
  computed: {
    columnsData() {
      if (this.columns){
        return this.columns.filter(function (item) {
          return !item.hide
        })
      }
      return []
    },
  },
  methods: {
    editReady(e,v){
      if (v){
        this.$refs.editor.setHTML(v)
      }else {
        this.$refs.editor.setHTML("")
      }

    },
    cancel(){
      this.$emit("update:visible",this.mVisible)
      this.$emit("cancel",this.mVisible)

    },
    onSubmit() {
      let uploads = this.columns.filter(function (item) {
        return item.type === 'upload'
      })
      let state = {};
      Object.assign(state, this.formState)
      console.log(state,uploads)
      for (let i = 0; i < uploads.length; i++) {
        if (state[uploads[i].key] && state[uploads[i].key][0] && state[uploads[i].key][0]["response"]){
          console.log(state[uploads[i].key][0]["response"])
          state[uploads[i].key] = state[uploads[i].key][0]["response"].data.path
        }else if (state[uploads[i].key] && state[uploads[i].key][0] && state[uploads[i].key][0]["url"]){
          console.log(state[uploads[i].key][0]["url"])
          state[uploads[i].key] = state[uploads[i].key][0]["url"]
        }
      }
      console.log(state)
      this.$emit("submit",state)
    }
  }
}
</script>

<style scoped>

</style>
