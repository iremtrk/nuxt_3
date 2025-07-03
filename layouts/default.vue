<template>  
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Anasayfa</NuxtLink> |
                <NuxtLink to="/products">Ürünlerimiz</NuxtLink> |
                <NuxtLink to="/contact">İletişim</NuxtLink> |
                <NuxtLink to="/about_us">Hakkımızda</NuxtLink>
            </nav>
        </header>
      <slot/>  
      <footer>
        <p>&copy 2025</p>
      </footer>
    </div>
</template>