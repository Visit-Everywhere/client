import {defineStore} from "pinia"
export const comments = defineStore('comments', {
    state: () =>({
        userID: 'zaebal',
        comments: []
    }),
    actions: {
        setUserID(id){this.userID = id},
        setComment(comment){this.comments.push(comment)},
    }
})