<template>
    <div>
        <br>
        <toptitle :titletext='title'></toptitle>
        <br>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" inline>
            <Row justify="space-around" >
                <Col>
                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>

                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>

                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>
                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>

                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>

                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item><Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>

                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
                </Form-item>

                <Form-item label="城市名称" prop="cityname">
                    <Input v-model="formValidate.cityname" placeholder="请输入城市（例如北京）"></Input>
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
                title: "列表查询页"
            }
        },
        components: {
            toptitle
        }
    }

</script>