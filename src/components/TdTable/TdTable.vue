<template>
  <section>
    <a-form v-if="$slots['Search']" class="table-search" style="margin-bottom: 16px;" :layout="'inline'"
            :model="searchForm" v-bind="{
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          }">
      <slot name="Search" :data="searchForm"></slot>
      <a-form-item :wrapper-col="{span: 4, offset: 0}">
        <a-button size="small" @click="onSearch" type="primary">
          <template #icon>
            <SearchOutlined/>
          </template>
          搜 索
        </a-button>
      </a-form-item>
    </a-form>
    <a-spin :spinning="spinning">
      <a-table
          size="small"
          :bordered="true"
          :locale="locale"
          v-if="data.records.length>0"
          :row-key="(record,index) => index"
          :data-source="data.records"
          :pagination="false"
          v-bind="$attrs"
          @change="handleTableChange"
      >
        <template  v-for="(item,index) in columnsData" :key="index">
          <template v-if="item.list && $slots['field-column-'+item.key]">
            <slot :name="'field-column-'+item.key" :item="item" :value="item[item.key]" :index="index"></slot>
          </template>
          <template v-else-if="item.list && $slots['field-'+item.key]">
            <a-table-column :sorter="item.sort" :align="(item.align || 'center')"  :title="item.title" :data-index="item.key" :key="item.key" :width="item.width>0?item.width:'auto'">
              <template #default="{ record,index  }">
                <span v-if="$slots['field-'+item.key]">
                  <slot :name="'field-'+item.key" :item="record" :value="record[item.key]" :index="index"></slot>
                </span>
              </template>
            </a-table-column>
          </template>
          <template v-else-if="item.list">
            <a-table-column :sorter="item.sort" :align="(item.align || 'center')"  :title="item.title" :data-index="item.key" :key="item.key" :width="item.width>0?item.width:'auto'">
              <template #default="{ record  }">
                <span>{{ optionsConversion(record[item.key],item.options) }}</span>
              </template>
            </a-table-column>
          </template>
        </template>

        <a-table-column v-if="$slots['Action']" key="Action" align="center" title="操作">
          <template #default="{ record,index }">
            <slot name="Action" :item="record" :index="index"></slot>
          </template>
        </a-table-column>
        <template v-if="$slots['expandedRowRender']" #expandedRowRender="{ record }">
          <slot name="expandedRowRender" :item="record" :index="index"></slot>
        </template>
      </a-table>
      <a-pagination class="pageStyle" size="small" @change="onChange" @showSizeChange="onShowSizeChange"
                    :show-total="total => `共 ${total} 条`" :total="data.total" :defaultPageSize="pageSize"
                    show-quick-jumper/>
    </a-spin>

  </section>
</template>

<script>
import {SearchOutlined} from '@ant-design/icons-vue';
import {message} from "ant-design-vue";

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
    }
  },
  components: {SearchOutlined},
  data() {
    let search = Object.assign({}, this.searchData)
    return {
      searchForm: search,
      locale: {
        filterConfirm: '确定',
        filterReset: '重置',
        emptyText: '暂无数据'
      },
      spinning: false,
      selectedRowKeys: [],
      pageSizeOptions: [
        16,
        30,
        50,
        100,
      ],
      data: {
        records: []
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
    sortDirections(sort){
      console.log(sort)
    },
    optionsConversion(value,options){
      if (null===options){
        return value
      }
      for (let optionsKey in options) {
        if (options[optionsKey].value===value){
          return options[optionsKey].label;
        }
      }
      return value;
    },
    handleTableChange(pagination, filters, sorter){
      console.log(pagination, filters, sorter)
      if (sorter){
        this.searchForm.sorter=sorter.field+","+sorter.order.replace("end","")
      }
      this.loadData(this.searchForm)
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
    onShowSizeChange(current, size) {
      this.onChange(current, size)
    },
    updateItem(item,key) {
      key = key || 'id';
      let index = this.data.records.findIndex(record => record[key] === item[key]);
      if (index >= 0) {
        Object.assign(this.data.records[index], item)
      }else {
        this.loadData()
      }
    },

    loadData(param,success,error) {
      success = success || function (){}
      error = error || function (){}
      param = param || {}
      param.page = param.page || 1
      param.size = param.size || this.pageSize
      this.searchForm = Object.assign(this.searchForm, param)
      this.spinning = true
      this.dataSource(this.searchForm).then(res => {
        if (res.code === 200) {
          this.locale.emptyText = '暂无数据'
          this.data = res.data
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
