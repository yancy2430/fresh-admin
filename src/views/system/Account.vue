<template>
  <div>
    <a-row :gutter='16' type='flex'>
      <a-col class='gutter-row' flex="280px">
        <a-card title='组织机构' style='height: 100%;' size="small">
          <a-tree
              v-if="treeData.length"
              defaultExpandAll
              draggable
              :show-icon="true"
              :show-line="true"
              @select="onSelectTree"
              :tree-data="treeData"
              :replace-fields="{
              title: 'name',
              key: 'id',
              value: 'id',
            }"
          >
            <template #group>
              <TeamOutlined/>
            </template>
            <template #role>
              <UserOutlined/>
            </template>
            <template v-slot:title="{name}">{{ name }}</template>
          </a-tree>
        </a-card>
      </a-col>
      <a-col class='gutter-row' flex="4">
        <td-table
            ref="table"
            title="用户列表"
            :data-source="parameter=>page(parameter)">
          <template #Search="{formState}">
            <a-form-item label="UID" name="id">
              <a-input-number v-model:value="formState.id" />
            </a-form-item>
            <a-form-item label="姓名" name="orderNo">
              <a-input v-model:value="formState.orderNo" />
            </a-form-item>
            <a-form-item label="用户名" name="bTime">
              <a-input v-model:value="formState.bTime" />
            </a-form-item>
            <a-form-item label="手机号" name="platform">
              <a-input-number v-model:value="formState.platform" />
            </a-form-item>
          </template>
            <template #Columns>
              <a-table-column title="UID" data-index="id" :sorter="true" align="center" />
              <a-table-column title="头像" data-index="avatar" />
              <a-table-column title="姓名" data-index="name" />
              <a-table-column title="用户名" data-index="username" />
              <a-table-column title="手机号" data-index="phone" />
              <a-table-column title="邮箱" data-index="email" />
              <a-table-column title="用户状态" data-index="status" />
              <a-table-column title="最后登录时间" data-index="lastLoginTime" />
              <a-table-column title="操作" data-index="action" align="center">
                <a>编辑</a>
                <a-divider type="vertical" />
                <a>禁用</a>
              </a-table-column>
            </template>
        </td-table>
      </a-col>
    </a-row>
    <a-modal destroyOnClose v-model:visible="userEdit.visible" :title="userEdit.selectUser.id?'编辑':'新增'+'用户'" :confirm-loading="userEdit.submitLoading"
             @ok="onSubmitUserEdit">
      <a-spin :spinning="userEdit.spinning">
        <a-form
            ref="submitForm"
            :model="userEdit.selectUser"
            :label-col="labelCol"
            :rules="formRules"
            :wrapper-col="wrapperCol"
        >
          <a-form-item label="用户名" name="username">
            <a-input :disabled="userEdit.selectUser.id!==undefined" v-model:value="userEdit.selectUser.username"/>
          </a-form-item>
          <a-form-item label="姓名" name="name">
            <a-input v-model:value="userEdit.selectUser.name"/>
          </a-form-item>
          <a-form-item label="角色" name="groups">
            <a-select
                v-model:value="userEdit.selectUser.groups"
                mode="multiple"
                show-search
            >
              <a-select-option v-for="(item,index) in groupData" :key="index" :value="item.id">{{item.name}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="手机号" name="phone">
            <a-input v-model:value="userEdit.selectUser.phone"/>
          </a-form-item>
          <a-form-item label="邮箱" name="email">
            <a-input v-model:value="userEdit.selectUser.email"/>
          </a-form-item>
          <a-form-item label="密码" name="password">
            <a-input-password :visibilityToggle="false" v-model:value="userEdit.selectUser.password"/>
          </a-form-item>
          <a-form-item label="状态" name="status">
            <a-radio-group :defaultValue="true" v-model:value="userEdit.selectUser.status">
              <a-radio :value="1">正常</a-radio>
              <a-radio :value="0">禁用</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-form>
      </a-spin>
    </a-modal>
  </div>
</template>

<script>
import {list as groupList} from '@/api/SysGroup'
import {toTree} from '@/utils/util'
import {page, removeById, updateById, getById,save as userSave} from '@/api/SysUser'
import TdTable from "@/components/TdTable/TdTable";
import {TeamOutlined, UserOutlined} from '@ant-design/icons-vue';
import {message} from "ant-design-vue";
import {TreeSelect} from 'ant-design-vue';

export default {
  name: "Account",
  components: {TdTable, TeamOutlined, UserOutlined},
  data() {
    return {
      formRules:{
        username: [
          { required: true,whitespace:true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 8, message: '用户名长度在2-8个字符内', trigger: 'blur' } ,
          { pattern:/^[a-zA-z]\w{1,7}$/, message: '用户名由数字、26个英文字母或下划线组成', trigger: 'blur' } ,
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 2, max: 8, message: '用户名长度在2-8个字符内', trigger: 'blur' } ,
        ],
        groups: [
          { required: true, message: '请分配角色',type:'array', trigger: 'blur' }
        ],
        phone:[
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,message: '请输入正确的手机号', trigger: 'blur' }
        ],
        email:[
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { pattern:/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/,message: '请输入正确的邮箱', trigger: 'blur' }
        ],

      },
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      page,
      treeExpandedKeys: [],
      showLine: true,
      SHOW_CHILD: TreeSelect.SHOW_CHILD,
      userEdit: {
        submitLoading: false,
        spinning: false,
        visible: false,
        groupVisible: false,
        selectUser: {},
      },
      groupData:[],
      treeData: [],
      confirmLoading: false,
      formItemLayout: {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
      },
    }
  },
  created() {
    groupList().then(res => {
      this.groupData = res.data.filter(r=>{
        return r.type === 1
      }).map((v)=>{
        return {id:v.id,name:v.name}
      })
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].type === 1) {
          res.data[i].slots = {
            icon: 'role',
          }
        } else {
          res.data[i].slots = {
            icon: 'group',
          }
        }
      }

      this.treeData = toTree(res.data)
    })
  },
  methods: {
    onAddUserClick(){
      this.userEdit.visible= true
      this.userEdit.selectUser = {}
    },
    delUser(item) {
      removeById({id: item.id}).then(res => {
        if (res.code === 200) {
          message.success("删除成功")
          this.$refs.table.loadData()
        } else {
          message.error(res.msg)
        }
      })
    },
    onSelectTree(e) {
      this.$refs.table.loadData({groupId: e[0]})
    },
    onClickUserEdit(item, index) {
        this.userEdit.index = index
        this.userEdit.visible = true
        this.userEdit.spinning = true;

        getById({id: item.id}).then(res => {
          if (res.code === 200) {
            this.userEdit.selectUser = res.data
            this.userEdit.selectUser.groups = res.data.groups.map(r=>r.id)
          } else {
            message.error(res.msg)
          }
          this.userEdit.spinning = false;
        })


    },
    onSubmitUserEdit() {
      this.$refs.submitForm.validate().then((res) => {
        console.log(res)
        this.userEdit.submitLoading = true;
        let data = Object.assign({},this.userEdit.selectUser)
        data.groups = data.groups.map(r=>{return {id:r,name:r}})
        if (this.userEdit.selectUser.id){
          updateById(data).then(res => {
            if (res.code === 200) {
              message.success("修改成功")
              this.userEdit.visible = false
              getById({id: this.userEdit.selectUser.id}).then(res => {
                if (res.code === 200) {
                  this.$refs.table.updateItem(this.userEdit.index, res.data)
                } else {
                  message.error(res.msg)
                }
              })
            } else {
              message.error(res.msg)
            }
            this.userEdit.submitLoading = false;
          })
        }else {
          userSave(data).then(res => {
            if (res.code === 200) {
              message.success("新增成功")
              this.userEdit.visible = false
              this.$refs.table.loadData()
            } else {
              message.error(res.msg)
            }
            this.userEdit.submitLoading = false;
          })
        }
      }).catch(error => {
        console.log('error', error);
      });


    },
    onClickUserGroup(item) {
      this.userEdit.selectUser = item
      this.userEdit.groupVisible = true
    },
    onSubmitUserGroup() {

    },
  }
}
</script>

<style scoped>
.permissions {
  background: #f8f8f8;
  max-height: 320px;
  overflow: auto;
}
/*:deep(.table-title){*/
/*  font-size: 16px;*/
/*}*/
</style>
