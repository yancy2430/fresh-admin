<template>
  <section>
    <a-form v-if="$slots['Search']"
            class="table-search"
            style="margin-bottom: 16px;" :layout="'inline'"
            :model="searchForm" v-bind="{
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            }}"
            autocomplete="off"
            @finish="onSearch"
    >
      <slot name="Search" :formState="searchForm"></slot>
      <a-form-item :wrapper-col="{span: 4, offset: 0}">
        <a-button size="small"  type="primary" html-type="submit">
          <template #icon>
            <SearchOutlined/>
          </template>
          搜 索
        </a-button>
      </a-form-item>
    </a-form>
    <a-table
          size="small"
          :bordered="true"
          :row-key="(record,index) => index"
          :data-source="data.records"
          :pagination="data"
          :loading="spinning"
          v-bind="$attrs"
          @change="handleTableChange">
        <slot name="Columns"></slot>
      </a-table>
  </section>
</template>

<script>
import {SearchOutlined} from '@ant-design/icons-vue';

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
  components: {SearchOutlined},
  data() {
    let search = Object.assign({}, this.searchData)
    return {
      searchForm: search,
      addForm:[],
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
        showQuickJumper:true,
        showSizeChanger:true,
        showTotal:total => `共 ${total} 条`
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
      console.log(pagination,filters, sorter)
      if (sorter && sorter.field && sorter.order) {
        this.searchForm.sorter = sorter.field + "," + sorter.order.replace("end", "")
      }
      this.loadData(Object.assign(this.searchForm,{page:pagination.current,size:pagination.pageSize}))
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
          Object.assign(this.data,res.data)
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

.table-search .ant-form-item {
  margin-bottom: 10px;
}
</style>
