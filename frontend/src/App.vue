<script setup>
import { RouterView, useRoute } from 'vue-router';
import { ref, computed, watch, onBeforeUnmount } from 'vue';

const route = useRoute();

let animationFrameId = null;
const patternRef = ref(null);

const isProjectDetailRoute = computed(() => {
    return route.name === 'project-detail' || route.name === 'NotFound';
});

const shouldShowPatternAnimation = computed(() => !isProjectDetailRoute.value);

// Function to start the animation
const startAnimation = () => {
    if (patternRef.value && shouldShowPatternAnimation.value) {
        let offset = 0;
        const animate = () => {
            offset = (offset - 0.5) % 60;
            if (patternRef.value) {
                patternRef.value.setAttribute('patternTransform', `translate(${offset}, 0)`);
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        animate();
    }
};

// Function to stop the animation
const stopAnimation = () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
};

// Watch for changes in `shouldShowPatternAnimation` to control animation
watch(shouldShowPatternAnimation, (newValue) => {
    if (newValue) {
        requestAnimationFrame(() => {
            startAnimation();
        });
    } else {
        stopAnimation();
    }
}, { immediate: true }); 

// Lifecycle hook
onBeforeUnmount(() => {
    stopAnimation();
});
</script>

<template>
    <div class="font-sans">
        <!-- Pattern (Animation) -->
        <div v-if="shouldShowPatternAnimation" class="absolute inset-0 z-0 pointer-events-none">
            <svg
                class="absolute top-0 left-0 w-full h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="iso"
                        patternUnits="userSpaceOnUse"
                        width="60"
                        height="34.64"
                        ref="patternRef"
                    >
                        <path
                        d="M0 17.32 L30 0 L60 17.32 L30 34.64 Z"
                        fill="none"
                        stroke="#C1C7CC"
                        stroke-width="1.0"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#iso)" />
            </svg>
        </div>

        <RouterView />

    </div>
</template>
