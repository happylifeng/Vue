<template>
    <div>
        <br>
        <toptitle titletext="天气预报查询页"></toptitle>
        <br>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Row>
                <Col span="5" offset="2">
                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>
                </Col>

            </Row>

            <Row>
                <Col span="20" offset="2">
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')">查询</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </Form-item>
                </Col>
            </Row>
            <Row>
                <Col span="20" offset="2">
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
                    cityname: ''
                },
                ruleValidate: {
                    cityname: [
                        { required: true, message: '城市名称不能为空', trigger: 'blur' }
                    ]
                },
                tableModel: {
                    columns: [
                        {
                            title: '项目',
                            key: 'name'
                        },
                        {
                            title: '说明',
                            key: 'desc'
                        },
                        {
                            title: '值',
                            key: 'value'
                        }
                    ],
                    data: [

                    ]
                },
                theme1: 'light'
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {

                        this.$http.get("static/data/weather.json", this.formValidate).then(function (response) {
                            var json = response.body;
                            if (json.status != '1') {
                                this.$Message.success("调用失败");
                            }
                            else {
                                this.$Message.success("查询成功");
                                var Item = function () {
                                    var item = {
                                        name: '',
                                        desc: '',
                                        value: ''
                                    };
                                    return item;
                                }

                                this.tableModel.data = [];

                                this.addNewItem(json.cityname, "天气", json.weather);
                                this.addNewItem(json.cityname, "风向大小", json.wind);
                                this.addNewItem(json.cityname, "气温", json.temperature);

                                this.$Message.success(json.message);
                            }



                        }, function (response) {
                            this.$Message.success('查询失败!');
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
                this.tableModel.data = [];
            },
            addNewItem(name, desc, value) {
                var item = this.NewItem();
                item.name = name;
                item.desc = desc;
                item.value = value;
                this.tableModel.data.push(item);
            }, NewItem() {
                var item = {
                    name: '',
                    desc: '',
                    value: ''
                };
                return item;
            }
        },
        components: {
            toptitle
        }

    }

</script>