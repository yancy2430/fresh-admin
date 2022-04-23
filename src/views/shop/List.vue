<template>
  <section>
    <a-card title="店铺列表" size="small">
      <a-table
          size="small"
          :bordered="true"
          :columns="columns"
          :row-key="(record,index) => index"
          :data-source="dataList"
          :pagination="pagination"
          @resizeColumn="handleResizeColumn"
      >
      </a-table>
    </a-card>
  </section>
</template>

<script>

export default {
  name: "List",
  components: {},
  data() {
    return {
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          resizable: true,
          width: 150,
        },
        {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          width: 100,
          minWidth: 100,
          maxWidth: 200,
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
        }, {
          title: 'Action',
          key: 'action',
        }
        ],
      data:[],
      dataList:[],
      pagination:{
        total: 200,
        current: 1,
        pageSize: 20,
      }
    }
  },
  created() {
    this.dataSource()
  },
  methods: {
    dataSource(){
      this.$request({
        url:"/fresh/shopAppMenu/page",
        params:{
          page:this.pagination.current,
          size:this.pagination.pageSize,
        }
      }).then(res=>{
        this.dataList = res.data.records
        this.pagination.current=res.data.current
        this.pagination.pageSize=res.data.size
        this.pagination.total=res.data.total

      })
    },
    handleResizeColumn: (w, col) => {
      col.width = w;
    }
  }
}
</script>

<style scoped>

</style>