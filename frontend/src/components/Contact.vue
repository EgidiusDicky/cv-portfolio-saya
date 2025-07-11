<template>
    <footer id="kontak" class="py-20 bg-gray-800 text-white">
        <div class="container mx-auto px-6 text-center">

                <div class="mb-12 text-center">
                    <h2 class="text-4xl font-bold text-white-800">
                        Hubungi Saya
                    </h2>
                    <div class="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded">
                    </div>
                </div>
                
                <p class="text-xl text-gray-300 mb-8">
                    Jangan ragu untuk terhubung atau bertanya.
                </p>
                <a  href="mailto:egidiusdicky@students.amikom.ac.id" 
                    class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12">
                    Kirim Email
                </a>
            <div class="flex justify-center space-x-6 mb-8">
                <a  href="https://github.com/EgidiusDicky" 
                    target="_blank" 
                    class="text-gray-400 hover:text-white transition-colors duration-300">
                    GitHub
                </a>
                <a  href="https://www.linkedin.com/in/egidius-dicky-narendra-ba-as-766538340/" 
                    target="_blank" 
                    class="text-gray-400 hover:text-white transition-colors duration-300">
                    LinkedIn
                </a>
            </div>
            <p class="text-gray-500">&copy; 
                {{ new Date().getFullYear() }} Egidius Dicky Narendra Ba'as. Dibuat dengan Vue.js dan Express.js
            </p>
        </div>
    </footer>
</template>