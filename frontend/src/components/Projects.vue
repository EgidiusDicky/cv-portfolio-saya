<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
    try {  
        const response = await axios.get('http://localhost:3000/api/projects'); 
        projects.value = response.data; 
    } 
    catch (error) {
        console.error("Error fetching projects:", error);
    }
});

</script>

<template>
    <section id="proyek" class="py-20 bg-gray-200">
        <div class="container mx-auto px-6">
        <SectionTitle title="Proyek Unggulan" />
            <div class="grid md:grid-cols-2 gap-12">
                <div v-for="project in projects" :key="project.title" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img :src="project.image" 
                          alt="Gambar Proyek" 
                          class="w-full h-56 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-white mb-2">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-200 mb-4">
                            {{ project.description }}
                        </p>
                        <div class="mb-4">
                            <span v-for="t in project.tech" :key="t" class="inline-block bg-white text-gray-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                                {{ t }}
                            </span>
                        </div>
                        <router-link
                            :to="{ name: 'project-detail', params: { id: project.id } }"
                            class="text-blue-600 font-semibold hover:underline"
                        >
                            Lihat Detail &rarr;
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>