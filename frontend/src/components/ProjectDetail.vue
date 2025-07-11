<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Contact from '../components/Contact.vue';

const router = useRouter();
const route = useRoute();

const project = ref(null);
const currentImage = ref(0);
const isLoading = ref(true);
const error = ref(null);

// Helper: Bangun URL gambar absolut (agar aman di Vercel/localhost)
const getFullImageUrl = (relativePath) => {
  const baseUrl = import.meta.env.DEV ? 'http://localhost:3000' : window.location.origin;
  return `${baseUrl}${relativePath}`;
};

function goBack() {
  router.back();
}

onMounted(async () => {
  const id = route.params.id;
  if (!id) {
    error.value = 'Project ID is missing.';
    isLoading.value = false;
    return;
  }

  try {
    const response = await axios.get(`/api/projects/${id}`);
    project.value = response.data;

    if (project.value && !project.value.images) {
      project.value.images = [project.value.image];
    }

  } catch (err) {
    console.error("Error fetching project detail:", err);
    if (err.response && err.response.status === 404) {
      error.value = 'Project not found.';
    } else {
      error.value = 'Failed to load project details. Please try again later.';
    }
  } finally {
    isLoading.value = false;
  }
});

function nextImage() {
  if (project.value?.images?.length > 0) {
    currentImage.value = (currentImage.value + 1) % project.value.images.length;
  }
}

function prevImage() {
  if (project.value?.images?.length > 0) {
    currentImage.value = (currentImage.value - 1 + project.value.images.length) % project.value.images.length;
  }
}
</script>

<template>
  <div class="pt-4 px-4 max-w-6xl mx-auto text-white">
    <!-- State: Loading -->
    <div v-if="isLoading" class="text-center text-lg text-gray-500">Loading project details...</div>

    <!-- State: Error -->
    <div v-else-if="error" class="text-center text-lg text-red-500">{{ error }}</div>

    <!-- Main Content -->
    <div v-else-if="project">
      <!-- Tombol Kembali -->
      <button
        @click="goBack"
        class="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg shadow text-white font-semibold flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        Kembali
      </button>

      <!-- Image Slider -->
      <div class="relative bg-gray-500 rounded-lg overflow-hidden mb-6">
        <a v-if="project.images?.length > 0"
           :href="getFullImageUrl(project.images[currentImage])"
           class="block"
        >
          <img :src="getFullImageUrl(project.images[currentImage])"
               class="w-full h-[300px] object-contain cursor-pointer"
               :alt="project.title + ' image ' + (currentImage + 1)"
          />
        </a>
        <div v-else class="w-full h-[300px] bg-gray-300 flex items-center justify-center text-gray-500">
          No image available
        </div>

        <!-- Prev Button -->
        <button
          v-if="project.images?.length > 1"
          @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next Button -->
        <button
          v-if="project.images?.length > 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Counter -->
        <div v-if="project.images?.length > 0" class="absolute bottom-2 right-2 text-sm bg-black/70 px-2 py-1 rounded text-white">
          {{ currentImage + 1 }} / {{ project.images.length }}
        </div>
      </div>

      <!-- Title & Tags -->
      <h1 class="text-3xl font-bold text-blue-600 mb-4">{{ project.title }}</h1>
      <div class="flex flex-wrap gap-2 mb-10">
        <span v-for="tag in project.tags" :key="tag" class="bg-gray-700 px-3 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>

      <!-- Info Cards -->
      <div class="space-y-6 mb-12">
        <div v-for="section in project.sections" :key="section.title" class="bg-gray-800 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold text-white mb-2">
            {{ section.title }}
          </h2>
          <p v-if="section.content">{{ section.content }}</p>
          <ul v-if="section.points" class="list-disc pl-5 space-y-1">
            <li v-for="point in section.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>

      <!-- Project Links -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">Project Links</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            class="block bg-gray-800 hover:bg-gray-600 transition p-5 rounded-lg shadow text-white font-semibold"
          >
            {{ link.label }}<br />
            <span class="text-sm text-white opacity-70">{{ link.url }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Fallback jika project null tapi bukan error -->
    <div v-else>
      <p class="text-center text-red-500">Project not found.</p>
    </div>

    <!-- Footer Contact -->
    <Contact />
  </div>
</template>