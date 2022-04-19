<template>
    <a-layout-content style="padding: 0 0px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
              v-model:selectedKeys="selectedKeys"
              style="lineHeight: 64px"
              mode="vertical"
              @select="onSelect"
          >
            <a-menu-item key="/account/settings/base">
              <template #icon>
                <MailOutlined/>
              </template>
              基础设置
            </a-menu-item>
            <a-menu-item key="/account/settings/security">
              <template #icon>
                <CalendarOutlined/>
              </template>
              安全设置
            </a-menu-item>
<!--            <a-menu-item key="3">-->
<!--              <template #icon>-->
<!--                <AppstoreOutlined/>-->
<!--              </template>-->
<!--              账号绑定-->
<!--            </a-menu-item>-->
            <a-menu-item key="/account/settings/notice">
              <template #icon>
                <SettingOutlined/>
              </template>
              新消息通知
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
</template>
<script>
import {defineComponent, reactive, toRefs} from 'vue';
import {MailOutlined, CalendarOutlined,  SettingOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    SettingOutlined,
  },
  name: "AccountSettings",
  data(){
    return {
      selectedKeys:[],
    }
  },
  methods:{
    onSelect(e){
      // console.log(e.key)
      this.$router.replace(e.key)
    }
  }
});
</script>