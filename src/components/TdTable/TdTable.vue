<template>
  <section>
    <a-form v-if="$slots['Search']"
            class="table-search"
            style="margin-bottom: 16px;" :layout="'inline'"
            :model="searchForm" v-bind="{
            labelCol: {
            style: {
                width: '75px',
              },
            },
            wrapperCol: {
              span: 16,
            }}"
            autocomplete="off"
            @finish="onSearch"
    >
      <slot name="Search" :formState="searchForm"></slot>
      <a-form-item>
        <a-button size="small" type="primary" html-type="submit">
          <template #icon>
            <SearchOutlined/>
          </template>
          搜 索
        </a-button>
      </a-form-item>
    </a-form>
    <div class="table-header">

    </div>
    <a-table
        class="table-list"
        size="small"
        :bordered="false"
        :row-key="(record,index) => index"
        :data-source="data.records"
        :pagination="data"
        :loading="spinning"
        v-bind="$attrs"
        @change="handleTableChange">
      <template #title>
        <a-row type="flex" style="padding: 5px 0">
          <a-col flex="100px"><span class="table-title">店铺列表</span></a-col>
          <a-col class="table-header-right" flex="auto"
                 style="display: flex;align-items: center;justify-content: flex-end;">
            <a-button size="small" type="primary" html-type="submit">
              <template #icon>
                <plus-outlined/>
              </template>
              新 增
            </a-button>
            <a-tooltip>
              <template #title>表格斑马纹</template>
              <a-switch checked-children="开" un-checked-children="关"/>
            </a-tooltip>
            <a-tooltip>
              <template #title>刷新</template>
              <ReloadOutlined class="table-header-icon"/>
            </a-tooltip>
            <a-tooltip>
              <template #title>列设置</template>
              <a-popover trigger="click" placement="bottomRight">
                <template #title>
                  <a-checkbox style="margin-left: 5px;">列展示 / 排序</a-checkbox>
                  <a-button type="link" style="padding: 0;">重置</a-button>
                </template>
                <template #content>
                    <Container @drop="onDrop">
                      <Draggable v-for="(item, i) in items" :key="item.id">
                        <div style="display: flex;align-items: center;margin-bottom: 8px">
                          <img style="margin-right: 5px;margin-left: -14px;cursor: move;" width="14" height="14"
                               src="../../assets/icon/info-darg.svg"/>
                          <a-checkbox :value="i">列展示{{ i }}</a-checkbox>
                        </div>
                      </Draggable>
                    </Container>
                </template>
                <setting-outlined class="table-header-icon"/>
              </a-popover>
            </a-tooltip>
            <a-tooltip>
              <template #title>导入表</template>
              <import-outlined class="table-header-icon"/>
            </a-tooltip>
            <a-tooltip>
              <template #title>下载表</template>
              <download-outlined class="table-header-icon"/>
            </a-tooltip>
          </a-col>
        </a-row>
      </template>
      <slot name="Columns"></slot>
    </a-table>
  </section>
</template>

<script>
import {
  SearchOutlined,
  ReloadOutlined,
  SettingOutlined,
  ImportOutlined,
  DownloadOutlined,
  PlusOutlined
} from '@ant-design/icons-vue';

import {Container, Draggable} from "vue3-smooth-dnd";

export default {
  name: 'TdTable',
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    loadDataComplete: {
      type: Function,
      default() {
        return function (data) {
        }
      }
    },
    dataSource: {
      type: Function
    },
    searchData: {
      type: Object,
      default() {
        return {}
      }
    },
    pageSize: {
      type: Number,
      default: 16
    },
  },
  components: {
    SearchOutlined,
    ReloadOutlined,
    SettingOutlined,
    ImportOutlined,
    DownloadOutlined,
    PlusOutlined,
    Container,
    Draggable
  },
  data() {
    let search = Object.assign({}, this.searchData)
    return {
      items: [
        {id: 1, data: "Princess Mononoke"},
        {id: 2, data: "Spirited Away"},
        {id: 3, data: "My Neighbor Totoro"},
        {id: 4, data: "Howl's Moving Castle"}
      ],
      searchForm: search,
      addForm: [],
      locale: {
        filterConfirm: '确定',
        filterReset: '重置',
        emptyText: '暂无数据'
      },
      spinning: false,
      selectedRowKeys: [],

      data: {
        records: [],
        pageSizeOptions: [
          "16",
          "30",
          "50",
          "100",
        ],
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => `共 ${total} 条`
      },
    }
  },
  created() {
    this.loadData({page: 1, size: this.pageSize})
  },
  computed: {
    columnsData() {
      return this.columns;
    }
  },
  methods: {
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult);
    },
    applyDrag(arr, dragResult) {
      const {removedIndex, addedIndex, payload} = dragResult;

      if (removedIndex === null && addedIndex === null) return arr;
      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      return result;
    },
    sortDirections(sort) {
      console.log(sort)
    },
    optionsConversion(value, options) {
      if (null === options) {
        return value
      }
      for (let optionsKey in options) {
        if (options[optionsKey].value === value) {
          return options[optionsKey].label;
        }
      }
      return value;
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      if (sorter && sorter.field && sorter.order) {
        this.searchForm.sorter = sorter.field + "," + sorter.order.replace("end", "")
      }
      this.loadData(Object.assign(this.searchForm, {page: pagination.current, size: pagination.pageSize}))
    },
    onChange(page, pageSize) {
      this.loadData({
        page: page,
        size: pageSize,
      })
    },
    onSearch() {
      this.loadData(this.searchForm)
    },
    updateItem(item, key) {
      key = key || 'id';
      let index = this.data.records.findIndex(record => record[key] === item[key]);
      if (index >= 0) {
        Object.assign(this.data.records[index], item)
      } else {
        this.loadData()
      }
    },
    loadData(param, success, error) {
      success = success || function () {
      }
      error = error || function () {
      }
      param = param || {}
      param.page = param.page || 1
      param.size = param.size || this.pageSize
      this.searchForm = Object.assign(this.searchForm, param)
      this.spinning = true
      this.dataSource(this.searchForm).then(res => {
        if (res.code === 200) {
          this.locale.emptyText = '暂无数据'
          Object.assign(this.data, res.data)
          this.data.pageSize = res.data.size
          this.data.size = undefined
          this.loadDataComplete(this.data)
        } else {
          this.locale.emptyText = res.msg
        }
        success(res)
      }).catch(function (err) {
        error(err)
      }).finally(() => {
        this.spinning = false
      })
    }
  }
}
</script>

<style>
.pageStyle {
  padding: 16px 0px;
  text-align: right;
}

.table-search {
  background: #ffffff;
  padding: 20px 0 10px 0;
}

.table-header {

}

.table-search .ant-form-item {
  margin-bottom: 10px;
}

.table-title {
  font-size: 18px;
  font-weight: 500;
}

.table-header-icon {
  font-size: 16px;
  font-weight: bold;
}
.table-list{
  background: #fff;
}
.table-header-right > * {
  margin-right: 16px;

}
</style>
