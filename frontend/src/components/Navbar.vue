<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <header class="bg-gray-800 shadow-md sticky top-0 z-50 animate-fade-in">
        <nav class="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <div class="text-xl md:text-2xl font-bold text-white">
                Egidius Dicky Narendra Ba'as
            </div>

            <!-- Desktop Navigation -->
            <ul class="hidden md:flex space-x-6">
                <li>
                    <a href="#profil"
                        class="text-gray-200 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
                        Profil
                    </a>
                </li>
                <li>
                    <a href="#pendidikan"
                        class="text-gray-200 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
                        Pendidikan
                    </a>
                </li>
                <li>
                    <a href="#skill"
                        class="text-gray-200 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
                        Skill
                    </a>
                </li>
                <li>
                    <a href="#proyek"
                        class="text-gray-200 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
                        Proyek
                    </a>
                </li>
                <li>
                    <a href="#kontak"
                        class="text-gray-200 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">
                        Kontak
                    </a>
                </li>
            </ul>

            <!-- Hamburger Icon -->
            <div class="md:hidden">
                <button @click="toggleMenu" class="text-white focus:outline-none">
                    <svg v-if="!isOpen" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden bg-gray-700 pb-4">
            <ul class="flex flex-col items-center space-y-4">
                <li>
                    <a @click="toggleMenu" href="#profil"
                        class="block text-gray-200 hover:text-blue-500 py-2 text-lg transition-colors duration-300">
                        Profil
                    </a>
                </li>
                <li>
                    <a @click="toggleMenu" href="#pendidikan"
                        class="block text-gray-200 hover:text-blue-500 py-2 text-lg transition-colors duration-300">
                        Pendidikan
                    </a>
                </li>
                <li>
                    <a @click="toggleMenu" href="#skill"
                        class="block text-gray-200 hover:text-blue-500 py-2 text-lg transition-colors duration-300">
                        Skill
                    </a>
                </li>
                <li>
                    <a @click="toggleMenu" href="#proyek"
                        class="block text-gray-200 hover:text-blue-500 py-2 text-lg transition-colors duration-300">
                        Proyek
                    </a>
                </li>
                <li>
                    <a @click="toggleMenu" href="#kontak"
                        class="block text-gray-200 hover:text-blue-500 py-2 text-lg transition-colors duration-300">
                        Kontak
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>
