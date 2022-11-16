<template>
    <div class="comment" v-for="comment in comments" >
        <span class="comment__date">{{comment.date}}</span>
        <span class="comment__body">{{comment.body}}</span>
    </div>
</template>
<script setup>

const props = defineProps({
    comments:{
        type:Array,
        required:true
    }
})


</script>

<style lang="scss" scoped>
.comment{
    background: #292A2E;
    border: 2px solid #494A4D;
    border-radius: 16px;
    color: #fff;
    display: flex;
    flex-direction: column;

    width: 700px;
    height: 150px;
    margin-top:40px;
    &__date{
        margin-left: 20px;
        margin-top: 10px;
    }
    &__body{
        margin-top: 20px;
        margin-left: 20px;
    }
}
</style>



