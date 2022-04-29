<template>
  <section>
    <a-card size="small">
      <td-table
          ref="table"
          :data-source="parameter=>dataSource(parameter)">
        <template #Search="{formState}">
          <a-form-item label="ID" name="id">
            <a-input-number v-model:value="formState.id" />
          </a-form-item>
          <a-form-item label="名称" name="name">
            <a-input v-model:value="formState.name" />
          </a-form-item>
          <a-form-item label="图标" name="icon">
            <a-input v-model:value="formState.icon" />
          </a-form-item>
          <a-form-item label="链接" name="link">
            <a-input v-model:value="formState.link" />
          </a-form-item>
          <a-form-item label="排序" name="sort">
            <a-input-number v-model:value="formState.sort" />
          </a-form-item>
        </template>
        <template #Columns>
          <a-table-column title="ID" data-index="id" :sorter="true" />
          <a-table-column title="名称" data-index="name"  />
          <a-table-column title="图标" data-index="icon"  />
          <a-table-column title="链接" data-index="link"  />
          <a-table-column title="排序" data-index="sort" :sorter="true" />
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