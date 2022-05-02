<template>
  <section>
    <a-card size="small">
      <td-table
          ref="table"
          :data-source="parameter=>dataSource(parameter)">
        <template #Search="{formState}">
          <a-form-item label="id" name="id">
            <a-input-number v-model:value="formState.id" />
          </a-form-item>
          <a-form-item label="订单号" name="orderNo">
            <a-input v-model:value="formState.orderNo" />
          </a-form-item>
          <a-form-item label="生单时间" name="bTime">
            <a-input v-model:value="formState.bTime" />
          </a-form-item>
          <a-form-item label="订单类别" name="platform">
            <a-input-number v-model:value="formState.platform" />
          </a-form-item>
          <a-form-item label="起飞" name="dptAirport">
            <a-input v-model:value="formState.dptAirport" />
          </a-form-item>
          <a-form-item label="到达" name="arrAirport">
            <a-input v-model:value="formState.arrAirport" />
          </a-form-item>
          <a-form-item label="日期" name="date">
            <a-input v-model:value="formState.date" />
          </a-form-item>
          <a-form-item label="航司" name="carrier">
            <a-input v-model:value="formState.carrier" />
          </a-form-item>
          <a-form-item label="航班号" name="code">
            <a-input v-model:value="formState.code" />
          </a-form-item>
          <a-form-item label="起飞时间" name="dptTime">
            <a-input v-model:value="formState.dptTime" />
          </a-form-item>
          <a-form-item label="到达时间" name="arrTime">
            <a-input v-model:value="formState.arrTime" />
          </a-form-item>
          <a-form-item label="机型" name="planeType">
            <a-input v-model:value="formState.planeType" />
          </a-form-item>
          <a-form-item label="余位" name="remain">
            <a-input-number v-model:value="formState.remain" />
          </a-form-item>
          <a-form-item label="Y仓价格" name="yPrice">
            <a-input v-model:value="formState.yPrice" />
          </a-form-item>
          <a-form-item label="舱位" name="cabin">
            <a-input v-model:value="formState.cabin" />
          </a-form-item>
          <a-form-item label="cpc销售价" name="cpcCabinPrice">
            <a-input v-model:value="formState.cpcCabinPrice" />
          </a-form-item>
          <a-form-item label="成人销售价" name="adultPrice">
            <a-input v-model:value="formState.adultPrice" />
          </a-form-item>
          <a-form-item label="票面价" name="printPrice">
            <a-input v-model:value="formState.printPrice" />
          </a-form-item>
          <a-form-item label="儿童票面价" name="printPriceChild">
            <a-input v-model:value="formState.printPriceChild" />
          </a-form-item>
          <a-form-item label="乘机人" name="manList">
            <a-input v-model:value="formState.manList" />
          </a-form-item>
          <a-form-item label="证件" name="cardList">
            <a-input v-model:value="formState.cardList" />
          </a-form-item>
          <a-form-item label="生日" name="bdayList">
            <a-input v-model:value="formState.bdayList" />
          </a-form-item>
          <a-form-item label="pnr" name="pnr">
            <a-input v-model:value="formState.pnr" />
          </a-form-item>
          <a-form-item label="总价" name="totalPrice">
            <a-input v-model:value="formState.totalPrice" />
          </a-form-item>
          <a-form-item label="联系电话" name="phone">
            <a-input v-model:value="formState.phone" />
          </a-form-item>
          <a-form-item label="支付状态(0:未支付,1:已支付,2:取消支付)" name="state">
            <a-input-number v-model:value="formState.state" />
          </a-form-item>
          <a-form-item label="成人人数" name="adultCount">
            <a-input-number v-model:value="formState.adultCount" />
          </a-form-item>
          <a-form-item label="儿童人数" name="childCount">
            <a-input-number v-model:value="formState.childCount" />
          </a-form-item>
          <a-form-item label="婴儿人数" name="infantCount">
            <a-input-number v-model:value="formState.infantCount" />
          </a-form-item>
          <a-form-item label="儿童销售价格" name="childPrice">
            <a-input v-model:value="formState.childPrice" />
          </a-form-item>
          <a-form-item label="婴儿价格" name="infantPrice">
            <a-input v-model:value="formState.infantPrice" />
          </a-form-item>
          <a-form-item label="是否拦截 1不拦截 2拦截" name="isIntercept">
            <a-input-number v-model:value="formState.isIntercept" />
          </a-form-item>
          <a-form-item label="拦截原因" name="interceptMsg">
            <a-input v-model:value="formState.interceptMsg" />
          </a-form-item>
          <a-form-item label="原始乘机人数据" name="passengerList">
            <a-input v-model:value="formState.passengerList" />
          </a-form-item>
          <a-form-item label="政策ID" name="policyId">
            <a-input-number v-model:value="formState.policyId" />
          </a-form-item>
          <a-form-item label="政策代码" name="policyCode">
            <a-input v-model:value="formState.policyCode" />
          </a-form-item>
          <a-form-item label="政策备注" name="policyRemarks">
            <a-input v-model:value="formState.policyRemarks" />
          </a-form-item>
          <a-form-item label="产品类型" name="productType">
            <a-input v-model:value="formState.productType" />
          </a-form-item>
          <a-form-item label="备注信息" name="remarks">
            <a-input v-model:value="formState.remarks" />
          </a-form-item>
          <a-form-item label="返程出发机场" name="dptAirportBack">
            <a-input v-model:value="formState.dptAirportBack" />
          </a-form-item>
          <a-form-item label="返程出发机场" name="arrAirportBack">
            <a-input v-model:value="formState.arrAirportBack" />
          </a-form-item>
          <a-form-item label="返程日期" name="dateBack">
            <a-input v-model:value="formState.dateBack" />
          </a-form-item>
          <a-form-item label="返程航司" name="carrierBack">
            <a-input v-model:value="formState.carrierBack" />
          </a-form-item>
          <a-form-item label="返程航班号" name="codeBack">
            <a-input v-model:value="formState.codeBack" />
          </a-form-item>
          <a-form-item label="返程出发时刻" name="dptTimeBack">
            <a-input v-model:value="formState.dptTimeBack" />
          </a-form-item>
          <a-form-item label="返程到达时刻" name="arrTimeBack">
            <a-input v-model:value="formState.arrTimeBack" />
          </a-form-item>
          <a-form-item label="返程仓位" name="cabinBack">
            <a-input v-model:value="formState.cabinBack" />
          </a-form-item>
          <a-form-item label="返程政策ID" name="policyIdBack">
            <a-input-number v-model:value="formState.policyIdBack" />
          </a-form-item>
          <a-form-item label="渠道" name="channel">
            <a-input v-model:value="formState.channel" />
          </a-form-item>
          <a-form-item label="退票规则" name="refundRule">
            <a-input v-model:value="formState.refundRule" />
          </a-form-item>
          <a-form-item label="改期规则" name="changeRule">
            <a-input v-model:value="formState.changeRule" />
          </a-form-item>
          <a-form-item label="转签规则" name="signRule">
            <a-input v-model:value="formState.signRule" />
          </a-form-item>
          <a-form-item label="燃油费" name="fuel">
            <a-input v-model:value="formState.fuel" />
          </a-form-item>
          <a-form-item label="儿童燃油费" name="fuelChild">
            <a-input v-model:value="formState.fuelChild" />
          </a-form-item>
          <a-form-item label="成人机建费" name="airTax">
            <a-input v-model:value="formState.airTax" />
          </a-form-item>
          <a-form-item label="儿童机建费" name="airTaxChild">
            <a-input v-model:value="formState.airTaxChild" />
          </a-form-item>
          <a-form-item label="返程燃油费" name="fuelBack">
            <a-input v-model:value="formState.fuelBack" />
          </a-form-item>
          <a-form-item label="返程儿童燃油费" name="fuelChildBack">
            <a-input v-model:value="formState.fuelChildBack" />
          </a-form-item>
          <a-form-item label="优质订单" name="hasInvoice">
            <a-input-number v-model:value="formState.hasInvoice" />
          </a-form-item>
          <a-form-item label="退差订单" name="hasInvoiceDifference">
            <a-input-number v-model:value="formState.hasInvoiceDifference" />
          </a-form-item>
          <a-form-item label="风险订单" name="hasRiskUser">
            <a-input-number v-model:value="formState.hasRiskUser" />
          </a-form-item>
          <a-form-item label="行程单" name="hasInvoiceNow">
            <a-input-number v-model:value="formState.hasInvoiceNow" />
          </a-form-item>
          <a-form-item label="行李额" name="luggage">
            <a-input v-model:value="formState.luggage" />
          </a-form-item>
          <a-form-item label="session标识" name="sessionId">
            <a-input v-model:value="formState.sessionId" />
          </a-form-item>
          <a-form-item label="拦截时间" name="orderTime">
            <a-input v-model:value="formState.orderTime" />
          </a-form-item>
          <a-form-item label="支付时间" name="payTime">
            <a-input v-model:value="formState.payTime" />
          </a-form-item>
          <a-form-item label="价格校验时间" name="priceTime">
            <a-input v-model:value="formState.priceTime" />
          </a-form-item>
          <a-form-item label="销售方式" name="saleMode">
            <a-input v-model:value="formState.saleMode" />
          </a-form-item>
          <a-form-item label="是否代理" name="acting">
            <a-input-number v-model:value="formState.acting" />
          </a-form-item>
        </template>
        <template #Columns>

          <a-table-column title="id" data-index="id" :sorter="true" />

          <a-table-column title="订单号" data-index="orderNo"  />

          <a-table-column title="生单时间" data-index="bTime"  />

          <a-table-column title="订单类别" data-index="platform" :sorter="true" />

          <a-table-column title="起飞" data-index="dptAirport"  />

          <a-table-column title="到达" data-index="arrAirport"  />

          <a-table-column title="日期" data-index="date"  />

          <a-table-column title="航司" data-index="carrier"  />

          <a-table-column title="航班号" data-index="code"  />

          <a-table-column title="起飞时间" data-index="dptTime"  />

          <a-table-column title="到达时间" data-index="arrTime"  />

          <a-table-column title="机型" data-index="planeType"  />

          <a-table-column title="余位" data-index="remain" :sorter="true" />

          <a-table-column title="Y仓价格" data-index="yPrice"  />

          <a-table-column title="舱位" data-index="cabin"  />

          <a-table-column title="cpc销售价" data-index="cpcCabinPrice"  />

          <a-table-column title="成人销售价" data-index="adultPrice"  />

          <a-table-column title="票面价" data-index="printPrice"  />

          <a-table-column title="儿童票面价" data-index="printPriceChild"  />

          <a-table-column title="乘机人" data-index="manList"  />

          <a-table-column title="证件" data-index="cardList"  />

          <a-table-column title="生日" data-index="bdayList"  />

          <a-table-column title="pnr" data-index="pnr"  />

          <a-table-column title="总价" data-index="totalPrice"  />

          <a-table-column title="联系电话" data-index="phone"  />

          <a-table-column title="支付状态(0:未支付,1:已支付,2:取消支付)" data-index="state" :sorter="true" />

          <a-table-column title="成人人数" data-index="adultCount" :sorter="true" />

          <a-table-column title="儿童人数" data-index="childCount" :sorter="true" />

          <a-table-column title="婴儿人数" data-index="infantCount" :sorter="true" />

          <a-table-column title="儿童销售价格" data-index="childPrice"  />

          <a-table-column title="婴儿价格" data-index="infantPrice"  />

          <a-table-column title="是否拦截 1不拦截 2拦截" data-index="isIntercept" :sorter="true" />

          <a-table-column title="拦截原因" data-index="interceptMsg"  />

          <a-table-column title="原始乘机人数据" data-index="passengerList"  />

          <a-table-column title="政策ID" data-index="policyId" :sorter="true" />

          <a-table-column title="政策代码" data-index="policyCode"  />

          <a-table-column title="政策备注" data-index="policyRemarks"  />

          <a-table-column title="产品类型" data-index="productType"  />

          <a-table-column title="备注信息" data-index="remarks"  />

          <a-table-column title="返程出发机场" data-index="dptAirportBack"  />

          <a-table-column title="返程出发机场" data-index="arrAirportBack"  />

          <a-table-column title="返程日期" data-index="dateBack"  />

          <a-table-column title="返程航司" data-index="carrierBack"  />

          <a-table-column title="返程航班号" data-index="codeBack"  />

          <a-table-column title="返程出发时刻" data-index="dptTimeBack"  />

          <a-table-column title="返程到达时刻" data-index="arrTimeBack"  />

          <a-table-column title="返程仓位" data-index="cabinBack"  />

          <a-table-column title="返程政策ID" data-index="policyIdBack" :sorter="true" />

          <a-table-column title="渠道" data-index="channel"  />

          <a-table-column title="退票规则" data-index="refundRule"  />

          <a-table-column title="改期规则" data-index="changeRule"  />

          <a-table-column title="转签规则" data-index="signRule"  />

          <a-table-column title="燃油费" data-index="fuel"  />

          <a-table-column title="儿童燃油费" data-index="fuelChild"  />

          <a-table-column title="成人机建费" data-index="airTax"  />

          <a-table-column title="儿童机建费" data-index="airTaxChild"  />

          <a-table-column title="返程燃油费" data-index="fuelBack"  />

          <a-table-column title="返程儿童燃油费" data-index="fuelChildBack"  />

          <a-table-column title="优质订单" data-index="hasInvoice" :sorter="true" />

          <a-table-column title="退差订单" data-index="hasInvoiceDifference" :sorter="true" />

          <a-table-column title="风险订单" data-index="hasRiskUser" :sorter="true" />

          <a-table-column title="行程单" data-index="hasInvoiceNow" :sorter="true" />

          <a-table-column title="行李额" data-index="luggage"  />

          <a-table-column title="session标识" data-index="sessionId"  />

          <a-table-column title="拦截时间" data-index="orderTime"  />

          <a-table-column title="支付时间" data-index="payTime"  />

          <a-table-column title="价格校验时间" data-index="priceTime"  />

          <a-table-column title="销售方式" data-index="saleMode"  />

          <a-table-column title="是否代理" data-index="acting" :sorter="true" />
        </template>
      </td-table>
    </a-card>
  </section>
</template>

<script>
import TdTable from "../../components/TdTable/TdTable";
export default {
  name: "List",
  components: {TdTable},
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    dataSource(params) {
      return  this.$request({
        url: "/fresh/shopAppMenu/page",
        method:"POST",
        params: params
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