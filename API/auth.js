export default function(instance){
    return {
        signup(payload){
            return instance.post('user/register', payload)
        },
        logout(){
            return instance.delete('user/logout')
        }
    }
}

