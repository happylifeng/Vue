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
                    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage" show-total></Page>
        </div>
    </div>
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
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ]
                },
                title: "列表查询页",
                tableModel: {
                    columns: [
                        {
                            title: '姓名',
                            key: 'name'
                        },
                        {
                            title: '年龄',
                            key: 'age'
                        },
                        {
                            title: '城市',
                            key: 'city'
                        }
                    ],
                    data: [

                    ]
                }
            }
        },
        components: {
            toptitle
        },
        methods:{
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if(valid){
                        this.$http.get("static/data/grid.json", this.formValidate).then(function (response) {
                            var json = response.body;
                            this.tableModel.data=json;
                        });
                    }
                    else{
                        this.$Message.error('表单验证失败!');
                    }

                });
            },changePage:function(page,size){
                
                this.$Message.success(JSON.stringify(page));
            }
        }
    }

</script>