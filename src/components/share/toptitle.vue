<template>
    <Row type="flex" justify="center" class="code-row-bg">
        <h1>
        {{titletext}}
        </h1>
    </Row>
</template>
<script>
    export default {
        name:"toptitle",
        data() {
            return {
                model: {
                    title:this.titletext
                }
            }
        },
        props:['titletext'],
        methods: {

        }
    }

</script>