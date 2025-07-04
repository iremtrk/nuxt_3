<template>
    <div>
        <p>
            composable sayaç: {{ count }}
            <button class="btn" @click="increase">Arttır</button> |
            <button class="btn" @click="decrease">Azalt</button> |
            <button class="btn-reset" @click="reset">Sıfırla</button>

        </p>
    </div>
</template>

<script setup>
    const{count,increase,decrease,reset}=useCounterButton()
</script>

<style scoped>
    .btn{
        background-color: pink;
        color: purple;
        border:none;
        border-radius: 5px;
        padding: 2px 7px;
        margin: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .btn:hover{
        background-color: rgb(219, 143, 202);
    }

    .btn-reset{
        background-color: rgb(216, 28, 60);
        color: rgb(14, 1, 14);
        border:none;
        border-radius: 5px;
        padding: 2px 7px;
        margin: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .btn-reset:hover{
        background-color: rgb(172, 23, 48);
        color: rgb(14, 1, 14);
    }
</style>