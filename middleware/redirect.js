export default defineNuxtRouteMiddleware((to,from)=>{
    if(to.path=="/products"){
        console.log("products sayfasına giremezsiniz... contact'a yönlendirildi")
        return navigateTo("/contact")
        
    }
})