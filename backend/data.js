const educationHistory = [ 
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2020 - 2022', institution: 'SMK Bina Bangsa Meliau', major: 'Multimedia' } 
];

const skills = [
    { name: 'Vue.js',       level: 'Menengah'   }, 
    { name: 'JavaScript',   level: 'Menengah'   },
    { name: 'Tailwind CSS', level: 'Menengah'   }, 
    { name: 'Node.js',      level: 'Menengah'   },
    { name: 'Express.js',   level: 'Menengah'   },
    { name: 'Laravel',      level: 'Menengah'   },
    { name: 'MySQL',        level: 'Menengah'   },
    { name: 'Git & GitHub', level: 'Menengah'   }, 
];

const projects = [
    {
        id: '1',
        title: 'F&B E-Commerce Platform',
        // UBAH INI: Dari absolute ke relative
        image: '/project_images/santapin/thumbnail-santapin.png', 
        description: 'Platform e-commerce dibidang F&B dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
        link: 'https://example.com/ecommerce',

        // --- ProjectDetail.vue ---
        tags: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
        images: [
            // UBAH INI: Dari absolute ke relative
            '/project_images/santapin/thumbnail-santapin.png',
            '/project_images/santapin/santapin-cart-page.png',
            '/project_images/santapin/santapin-dashboard-page.png',
            '/project_images/santapin/santapin-home-page.png',
            '/project_images/santapin/santapin-menu-detail-page.png',
            '/project_images/santapin/santapin-menu-page.png',
            '/project_images/santapin/santapin-team.png'
        ],
        sections: [
            {
                title: 'Ringkasan',
                content: 'Ini adalah platform e-commerce dibidang F&B yang memungkinkan pengguna menjelajahi produk, menambahkannya ke keranjang, dan menyelesaikan pembelian. Fokus pada pengalaman pengguna yang mulus dan manajemen inventaris yang efisien.'
            },
            {
                title: 'Masalah yang Diselesaikan',
                points: [
                    'Menyediakan platform terpusat untuk penjualan bisnis F&B.',
                    'Memudahkan pengelolaan produk dan pesanan.',
                    'Memberikan pengalaman belanja yang intuitif bagi pengguna.'
                ]
            },
            {
                title: 'Kontribusi',
                points: [
                    'Membangun antarmuka pengguna interaktif menggunakan Vue.js dan Tailwind CSS.',
                ]
            },
            {
                title: 'Tantangan',
                points: [
                    'Mengelola state keranjang belanja yang kompleks di sisi frontend.',
                    'Memastikan keamanan transaksi dan data pengguna.',
                    'Mengoptimalkan performa aplikasi untuk loading yang cepat.'
                ]
            }
        ],
        links: [
            { label: 'GitHub Frontend', url: 'https://github.com/EgidiusDicky/Santapin' },
            { label: 'GitHub Backend', url: 'https://github.com/RayanBersabal/Santapin-backend' },
        ]
    },
    {
        id: '2',
        title: 'IoT-Powered Egg Incubator',
        // UBAH INI: Dari absolute ke relative
        image: '/project_images/egg_incubator/thumbnail-egg-incubator.png', 
        description: 'Sistem inkubasi telur pintar berbasis IoT yang mengontrol suhu, kelembapan, dan rotasi telur secara otomatis.',
        tech: ['Arduino IDE', 'Blynk', 'Thingspeak', 'EPS32'],
        link: 'https://example.com/incubator',

        // --- ProjectDetail.vue ---
        tags: ['Arduino IDE', 'Blynk', 'Thingspeak', 'EPS32'],
        images: [
            // UBAH INI: Dari absolute ke relative
            '/project_images/egg_incubator/thumbnail-egg-incubator.png',
            '/project_images/egg_incubator/egg-incubator-wiring-diagram.png',
            '/project_images/egg_incubator/egg-incubator1.jpg',
            '/project_images/egg_incubator/egg-incubator2.jpg',
            '/project_images/egg_incubator/egg-incubator-internal.jpg',
            '/project_images/egg_incubator/egg-incubator-temperature-sensor.jpg',
            '/project_images/egg_incubator/egg-incubator-motor-rotator.jpg',
            '/project_images/egg_incubator/egg-incubator-wiring.jpg',
            '/project_images/egg_incubator/egg-incubator-team.jpg'
        ],
        sections: [
            {
                title: 'Ringkasan',
                content: 'Proyek ini adalah sistem inkubasi telur pintar berbasis ESP32 yang mengatur suhu, kelembapan, dan rotasi telur secara otomatis. Sistem dikembangkan menggunakan Arduino IDE dan memanfaatkan Blynk serta ThingSpeak untuk monitoring dan notifikasi berbasis IoT. Pendekatan fuzzy logic diterapkan untuk menjaga kestabilan kondisi lingkungan.'
            },
            {
                title: 'Masalah yang Diselesaikan',
                points: [
                    'Menjaga suhu dan kelembapan tetap optimal untuk meningkatkan tingkat keberhasilan penetasan.',
                    'Memastikan rotasi telur berlangsung sesuai jadwal tanpa intervensi manual.',
                    'Memungkinkan pemantauan kondisi inkubator secara remote melalui aplikasi dan dashboard IoT.'
                ]
            },
            {
                title: 'Kontribusi',
                points: [
                    'Mendesain rangkaian elektronik dan logika kontrol menggunakan ESP32 dan Arduino IDE.',
                    'Mengembangkan sistem fuzzy logic untuk manajemen suhu dan kelembapan dinamis.',
                    'Mengintegrasikan Blynk dan ThingSpeak untuk visualisasi data dan pengiriman notifikasi.'
                ]
            },
            {
                title: 'Tantangan',
                points: [
                    'Menyesuaikan logika fuzzy dengan karakteristik real sensor yang fluktuatif.',
                    'Mengelola pengiriman data ke dua platform IoT secara sinkron dan efisien.',
                    'Menjamin konektivitas stabil agar inkubator dapat dipantau setiap saat.'
                ]
            }
        ],
        links: [
            { label: 'GitHub repository', url: 'https://github.com/EgidiusDicky/egg-incubator-esp32' }
        ]
    }
];

module.exports = { educationHistory, skills, projects };