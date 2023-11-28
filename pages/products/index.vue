<template>
    <button @click="insert">create user</button>
    <input type="text" v-model="name">
    <input type="text" v-model="password">
    <p>{{ stuff }}</p>
    <button @click="showusers">show all users</button>
</template>

<script setup>

const name = ref('')
const password = ref('')

const stuff = ref(null)
async function insert(){
    const { data, pending, error, refresh } = await useFetch('/api/user/createuser',{
        method:'POST',
        body:{
            name:name.value,
            password:password.value
        }
    })
    if(error.value){
        stuff.value = error.value.data.message
    }
    else{
        stuff.value = data.value.message
    }
}

async function showusers(){
    const { data, pending, error, refresh } = await useFetch('/api/user/allusers',{
        method:'GET',
    })
    if(error.value){
        stuff.value = error.value.data.message
    }
    else{
        stuff.value = data.value
    }
}
</script>