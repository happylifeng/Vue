<template>
    <div>
        <br>
        <toptitle :titletext='title'></toptitle>
        <br>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" inline>
            <Row justify="space-around" >
                <Col>
                <Form-item label="名称" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                </Form-item>
                </Col>
            </Row>

            <Row justify="space-around">
                <Col>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')">查询</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </Form-item>
                </Col>
            </Row>
            <Row justify="space-around">
                <Col>
                    <Table border :columns="tableModel.columns" :data="tableModel.data"></Table>
                </Col>
            </Row>
        </Form>
    </div>
</template>
<script>
    import toptitle from '../share/toptitle'
    export default {
        data() {
            return {
                formValidate: {
                    name: ''
                },
                ruleValidate: {
                    cityname: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ]
                },
                title: "多条件自适应页",
                tableModel: {
                    columns: [
                        {
                            title: '姓名',
                            key: 'name'
                        },
                        {
                            title: '年龄',
                            key: 'desc'
                        },
                        {
                            title: '城市',
                            key: 'value'
                        }
                    ],
                    data: [

                    ]
                }
            }
        },
        components: {
            toptitle
        }
    }

</script>