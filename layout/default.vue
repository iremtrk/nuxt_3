<template>  
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Ürünlerimiz</NuxtLink> |
                <NuxtLink to="/contact">İletişim</NuxtLink> |
                <NuxtLink to="/about_us">Hakkımızda</NuxtLink>
            </nav>
        </header>
      <slot/>  
    </div>
</template>