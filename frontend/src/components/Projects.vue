<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

// Helper function to construct full image URL dynamically
const getFullImageUrl = (relativePath) => {
    // In development (npm run dev), import.meta.env.DEV is true, so use localhost.
    // In production (on Vercel), import.meta.env.DEV is false, so use the current origin (Vercel's HTTPS URL).
    // This assumes image paths in data.js are like '/project_images/...'
    const baseUrl = import.meta.env.DEV ? 'http://localhost:3000' : window.location.origin;
    return `${baseUrl}${relativePath}`;
};

onMounted(async () => {
    try {
        // API call uses relative path, base URL is configured in main.js
        const response = await axios.get('/api/projects');
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
                    <img :src="getFullImageUrl(project.image)"
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