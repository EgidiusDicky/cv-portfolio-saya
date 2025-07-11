<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
    try { 
        // CHANGED: Removed hardcoded 'http://localhost:3000'
        const response = await axios.get('/api/skills');
        skills.value = response.data; 
    } catch (error) { 
        console.error(error); 
    }
});

</script>

<template>
    <section id="skill" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
        <SectionTitle title="Keahlian & Teknologi" />
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="skill in skills" :key="skill.name" class="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <h3 class="text-xl font-bold text-white">
                        {{ skill.name }}
                    </h3>
                    <p class="text-gray-500 mt-2">
                        {{ skill.level }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>