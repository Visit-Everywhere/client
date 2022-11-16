<template>
    <div>
        <div class="input_container">
            <AtomsInputComments class="input" @create="createComment"/>

        </div>
        <div class="comments_container"   >
            <AtomsComment class="comment"  :comments = "comments" />
        </div>
    </div>
</template>
<script setup>
    let comments = ref([
    {id: 0, date:"16.05.22", body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {id: 1,  date:"16.05.22", body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
    ])




const createComment = (comment) =>{
    comments.value.push(comment)
    console.log(comment)
}


</script>

<style lang="scss"  >

.comments_container{
    margin-left: 450px;
    margin-top: 50px;
    
}
.input_container{
    margin-left: 450px;
    margin-top: 100px;
}

</style>