<template>
    <div >
        <pre>{{userID}}</pre>
        <div>
            <input type="text" placeholder="Write here..." v-model="comment.body"  >
        </div>
        <div class="btn-container">
            <button class="btn" @click="craeteComment">{{btnText}}</button>
        </div >
    </div>
</template>
<script setup>
import { date } from 'yup';
import {comments} from '~/stores/comments'


const {setUserID,userID,setComment } = comments()


const emit = defineEmits([
    "create"
])

// let body = ref('')
const props = defineProps({
    inputPlaceholder:{
        type:String,
        default:"Write here..."
    },
    btnText:{
        type:String,
        default:"Post"
    }

});


let comment = {
    body:'',
    date:''
}
const craeteComment = () =>{
    // comment.id ++,
    // comment.date = new Date().toLocaleString(),
    // emit('create', comment),
    // comment = {
    //     date:'',
    //     body: ''
    // }
    setComment(comment)
    console.log(1)
}



</script>

<style scoped>
div{
    display: table;
    box-sizing: border-box;

}
input{

    padding: 12px 600px 46px 16px;

    width: 700px;
    height: 77px;

    background: #131620;
    border-radius: 16px;
    color: #D4D4D5;
}
input::placeholder{
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #D4D4D5;
}

.btn{
    width: 100%;
    max-width: 89px;
    height: 32px;
    background: #38405F;
    border-radius: 36px;
    color: #FFFFFF;
    padding: 5px 29px;
    margin-top: 20px;
}
</style>