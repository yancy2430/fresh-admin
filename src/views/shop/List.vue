<template>
  <section>
    <td-table
        title="订单记录"
        ref="table"
        :delete-item-ok="deleteItem"
        :add-item-ok="addItem"
        :edit-item-ok="editItem"
        :data-source="parameter=>dataSource(parameter)">
      <template #Search="{formState}">
        <a-form-item label="ID" name="id" >
          <a-input-number v-model:value="formState.id" />
        </a-form-item>
        <a-form-item label="订单号" name="orderNo" >
          <a-input v-model:value="formState.orderNo" />
        </a-form-item>
        <a-form-item label="订单类别" name="platform">
          <a-input-number v-model:value="formState.platform" />
        </a-form-item>
        <a-form-item label="订单型号" name="platform">
          <a-input-number v-model:value="formState.platform" />
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="ID" data-index="id" :sorter="true" align="center" />
        <a-table-column title="订单号" data-index="orderNo" align="center"  />
        <a-table-column title="生单时间" data-index="bTime" align="center"  />
        <a-table-column title="订单类别" data-index="platform" :sorter="true" align="center"  />
        <a-table-column title="起飞" data-index="dptAirport" align="center"  />
        <a-table-column title="到达" data-index="arrAirport" align="center"  />
        <a-table-column title="日期" data-index="date" align="center"  />
        <a-table-column title="航司" data-index="carrier" align="center"  />
        <a-table-column title="航班号" data-index="code" align="center"  />
        <a-table-column title="起飞时间" data-index="dptTime" align="center"  />
        <a-table-column title="到达时间" data-index="arrTime" align="center"  />
        <a-table-column title="机型" data-index="planeType" align="center"  />
        <a-table-column title="余位" data-index="remain" :sorter="true" align="center"  />
        <a-table-column title="Y仓价格" data-index="yPrice" align="center"  />
        <a-table-column title="舱位" data-index="cabin" align="center"  />
        <a-table-column title="cpc销售价" data-index="cpcCabinPrice" align="center"  />
        <a-table-column title="成人销售价" data-index="adultPrice" align="center"  />
      </template>
      <template #AddItem="{formState}">
        <a-form-item
            label="Username"
            name="username"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
            label="Password"
            name="password"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
      </template>
      <template #EditItem="{formState}">
        <a-form-item
            label="订单号"
            name="orderNo">
          <a-input v-model:value="formState.orderNo" />
        </a-form-item>
        <a-form-item
            label="ID"
            name="id">
          <a-input v-model:value="formState.id" />
        </a-form-item>
      </template>
    </td-table>
  </section>
</template>

<script>
import TdTable from "@/components/TdTable/TdTable";
export default {
  name: "List",
  components: {TdTable},
  data() {
    return {
      showModal:false,
    }
  },
  created() {

  },
  methods: {
    dataSource(params) {
      return  this.$request({
        url: "/fresh/shopRecord/page",
        method:"POST",
        params: params
      })
    },
    addItem(values){
      console.log(values)
    },
    editItem(values){
      console.log(values)
    },
    deleteItem(item){
      return this.$request({
        url: "/fresh/shopRecord/removeById",
        method:"POST",
        params: {
          id:item.id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>