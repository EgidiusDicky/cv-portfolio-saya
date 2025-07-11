<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/'); // Navigate to the home page
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800 font-sans">
    <div class="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
      <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 class="text-3xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
      <p class="text-lg text-gray-600 mb-8">
        Maaf, halaman yang Anda cari tidak ada. Mungkin Anda salah mengetik alamat atau halaman telah dipindahkan.
      </p>
      <button
        @click="goHome"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Kembali ke Beranda
      </button>
    </div>
  </div>
</template>