<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
    try { 
        // CHANGED: Removed hardcoded 'http://localhost:3000'
        const response = await axios.get('/api/education');
        educationHistory.value = response.data; 
    } catch (error) { 
        console.error(error); 
    }
});
</script>

<template>
    <section id="pendidikan" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <SectionTitle title="Riwayat Pendidikan" />
            <div class="relative max-w-4xl mx-auto">
                <!-- Vertical Line -->
                <div class="absolute h-full border-r-2 border-gray-300 left-1/2 transform -translate-x-1/2">
                </div>

                <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-8 flex items-center w-full">
                    <!-- Left Side (Even Index) -->
                    <template v-if="index % 2 === 0">
                        <div class="w-1/2 pr-8 text-right relative">
                            <!-- Content Block -->
                            <div class="bg-gray-800 p-4 rounded-lg shadow-md inline-block text-left">
                                <p class="font-semibold text-blue-600">
                                    {{ edu.period }}
                                </p>
                                <h3 class="text-xl font-bold text-white">
                                    {{ edu.institution }}
                                </h3>
                                <p class="text-gray-200">
                                    {{ edu.major }}
                                </p>
                            </div>
                            <!-- Dot for Left Side -->
                            <div class="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full z-10 border-4 border-white"></div>
                        </div>
                        <div class="w-1/2"></div> <!-- Empty div to push content to left -->
                    </template>

                    <!-- Right Side (Odd Index) -->
                    <template v-else>
                        <div class="w-1/2"></div> <!-- Empty div to push content to right -->
                        <div class="w-1/2 pl-8 text-left relative">
                            <!-- Content Block -->
                            <div class="bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                                <p class="font-semibold text-blue-600">
                                    {{ edu.period }}
                                </p>
                                <h3 class="text-xl font-bold text-white">
                                    {{ edu.institution }}
                                </h3>
                                <p class="text-gray-200">
                                    {{ edu.major }}
                                </p>
                            </div>
                            <!-- Dot for Right Side -->
                            <div class="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full z-10 border-4 border-white"></div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>