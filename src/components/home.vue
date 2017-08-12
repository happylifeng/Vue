<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        position: relative;
        border-radius: 4px;
        overflow:hidden;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        color: #9ea7b4;
        height: 80px;
        margin-top:-80px;
        border-top: 1px solid #e0e0e0;
    }
    .Footer_Clear
    {
        height: 80px;
    }
    .layout-menu-left {
        background: #464c5b;
    }
    .layout-menu-right {
        background: #f5f7f9;
    }
    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }
    .height100
    {
        height:100%;
    }

</style>
<template>
    <div class="layout height100" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" class="height100">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" @on-select="route">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text">前端技术</span>
                        </template>
                        <Menu-item name="1-1" class="layout-text" >
                            欢迎页
                        </Menu-item>
                        <Menu-item name="1-2" class="layout-text" >
                            天气预报查询页
                        </Menu-item>
                        <Menu-item name="1-3" class="layout-text" >
                            这是一个很长的页面
                        </Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">导航二</span>
                        </template>
                        <Menu-item name="2-1" class="layout-text">选项 1</Menu-item>
                        <Menu-item name="2-2" class="layout-text">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">导航三</span>
                        </template>
                        <Menu-item name="3-1" class="layout-text">选项 1</Menu-item>
                        <Menu-item name="3-2" class="layout-text">选项 2</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col :span="spanRight" class="layout-menu-right height100" style="overflow:scroll;">
                 <div style="position:fixed;width:100%;">
                        <div class="layout-header">
                            <i-button type="text" @click="toggleClick">
                                <Icon type="navicon" size="32"></Icon>
                            </i-button>
                        </div>
                        <div class="layout-breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                                <Breadcrumb-item>某应用</Breadcrumb-item>
                            </Breadcrumb>
                        </div>
                    </div>
                <div style="min-height:100%;">
                   <div style="height:120px;"></div>
                    <div class="layout-content" >
                        <div class="layout-content-main">
                            <router-view></router-view>
                        </div>
                    </div>
                    <div class="Footer_Clear"></div>
                </div>
                
                <div class="layout-copy">
                    <Row  type="flex" justify="center" align="middle" style="margin-top:15px;">
                        <Col>
                            <a target="_blank" href="http://blog.csdn.net/qq812858143">CSDN</a>
                        </Col>
                        <Col offset="1">
                            <a target="_blank" href="https://github.com/merciqiao">GitHub</a>
                        </Col>
                    </Row>
                     <Row type="flex" justify="center" align="top" style="margin-top:15px;">
                        <Col>
                            2017-2019 &copy; merciqiao
                        </Col>
                    </Row>
                </div>
        
                 
                
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                        spanLeft: 5,
                        spanRight: 19
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            route(name){
                var routes={};
                routes["1-1"]="/hello";
                routes["1-2"]="/weather";
                routes["1-3"]="/long";
                this.$router.push(routes[name]);
            }
        }
    }

</script>