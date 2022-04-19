<template>
    <section>
        <a-card :title="title" size="small">
            <template v-slot:extra>
                <a-tag class="tag-click" style="cursor: pointer" color="#2db7f5" @click="onAddsysAttachment">新增</a-tag>
            </template>
            <td-table :columns="columns" :data-source="page" ref="table">
                <template v-slot:Action="{item}">
                    <div>
                        <a-button type="link" size="small" @click="onEditsysAttachment(item)">编辑</a-button>
                        <a-popconfirm
                                title="是否删除此项?"
                                ok-text="是"
                                cancel-text="否"
                                @confirm="onRemovesysAttachment(item)">
                            <a-button type="link" style="color: red" size="small">删除</a-button>
                        </a-popconfirm>
                    </div>
                </template>
            </td-table>
            <base-form v-model:visible="visible"
                       :confirmLoading="confirmLoading"
                       :formData="formData"
                       :title="title"
                       :columns="columns" @submit="submit">
            </base-form>
        </a-card>

    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {head} from "@/utils/request";
    import BaseForm from "@/components/BaseForm/BaseForm";
    import {message} from "ant-design-vue";
    import {getById, page, removeById, save} from "@/api/SysAttachment";

    export default {
        name: "Attachment",
        components: {BaseForm, TdTable},
        data() {
            return {
                title: "",
                page: page,
                visible: false,
                formData: {},
                columns: [],
                confirmLoading: false,
            }
        },
        created() {
            head("/shop/sysAttachment/head").then(res => {
                this.columns = res.data
            })
        },
        methods: {
            onAddsysAttachment(){
                this.visible = true;
                this.formData = {}
            },
            onEditsysAttachment(item) {
                this.visible = true;
                getById({id: item.id}).then(res => {
                    this.formData = res.data
                })
            },
            onRemovesysAttachment(item) {
                removeById({id: item.id}).then(res => {
                    this.$refs.table.loadData()
                    message.success("删除成功")
                })
            },
            submit(data) {
                this.confirmLoading = true;
                save(data).then(res => {
                    message.success("保存成功")
                    this.$refs.table.updateItem(data, "id")
                    this.visible = false
                    this.confirmLoading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>
