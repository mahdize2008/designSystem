<script setup>
const items = ['English', 'Português (Europeu)', 'Português (Brasil)', 'Français', 'Español (Europeo)', 'Español (México)', 'Deutsch', 'Italiano', 'Русский', 'العربية', 'Bahasa Indonesia', 'हिन्दी', 'বাংলা', 'मराठी', 'ਪੰਜਾਬੀ', 'Bahasa Melayu', 'Tiếng Việt', 'Türkçe']
</script>
<template>
    <img src="~/assets/img/logo-dark.svg" class="mb-3" alt="">
    <div class="flex items-start -m-8">
        <div class="p-8 max-w-[474px]">
            <p class="text-base mb-4 text-dark">
                Aptoide is the fastest growing app store and distribution platform in the world. We are a global
                platform
                for global talent. Do you want the world? <b>Let’s play together.</b>
            </p>
            <SelectBox :items="items" class="mb-9" />
            <SocialMedia />
        </div>
        <div class="p-8 w-fit">
            <h2 class="text-dark text-base font-medium mb-4">
                Aptoide App Store
            </h2>
            <ul class="-my-2">
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        FAQs
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Support
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Contact Us
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Blog
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Brand Assets
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="p-8 w-fit">
            <h2 class="text-dark text-base font-medium mb-4">
                Aptoide S.A
            </h2>
            <ul class="-my-2">
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        The Company
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Products
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        About us
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Careers
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="p-8 w-fit mb-4">
            <h2 class="text-dark text-base font-medium mb-4">
                Aptoide S.A Products
            </h2>
            <ul class="-my-2">
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Aptoide App Store
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Aptoide for iOS
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Aptoide TV
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        Catappult
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        AppCoins Wallet
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="text-dark-alpha block text-sm py-2">
                        e-Skills
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex items-center">
        <p class="text-natural text-2xs w-[490px]">
            ©2024 APTOIDE.COM. All rights reserved
        </p>
        <ul class="flex items-center -mx-3">
            <li class="px-3">
                <NuxtLink class="text-2xs text-dark-alpha">
                    Legal Informations
                </NuxtLink>
            </li>
            <li class="px-3">
                <NuxtLink class="text-2xs text-dark-alpha">
                    Cookie Policy
                </NuxtLink>
            </li>
            <li class="px-3">
                <NuxtLink class="text-2xs text-dark-alpha">
                    Privacy Policy
                </NuxtLink>
            </li>
            <li class="px-3">
                <NuxtLink class="text-2xs text-dark-alpha">
                    Report DMCA
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>