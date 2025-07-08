<template>
    <div>
        <input type="text" v-model="kullaniciAdi" placeholder="Kullanıcı adı">
        <button @click="girisYap">Giriş Yap</button>
        <p v-if="hata">{{ hata }}</p>
    </div>
</template>

<script setup>
const router = useRouter()

const kullaniciAdi = ref("")
const hata = ref("")
const user = useState('user', () => null)

function girisYap() {

    if (kullaniciAdi.value == 'aaa') {
        user.value = 'aaa'
        router.push({ path: "/" })

    }
    else {
        hata.value = "Kullanıcı adı hatalı!"
    }
}

</script>