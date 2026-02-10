<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const windowWidth = ref(0);
const windowHeight = ref(0);

// Global Mouse movement handler
const handleMouseMove = (e) => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
};

const updateDimensions = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
};

onMounted(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize center
    mouseX.value = window.innerWidth / 2;
    mouseY.value = window.innerHeight / 2;
});

onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions);
    window.removeEventListener('mousemove', handleMouseMove);
});

// Calculate rotation based on mouse position
const cardStyle = computed(() => {
    // Reduced rotation angle for a more subtle, stable feel
    const rotateX = ((mouseY.value - windowHeight.value / 2) / windowHeight.value) * -5;
    const rotateY = ((mouseX.value - windowWidth.value / 2) / windowWidth.value) * 5;

    return {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    };
});

// Helper for parallax translation
// depth: higher value = more movement
const getParallaxStyle = (depth) => {
    const x = ((mouseX.value - windowWidth.value / 2) / windowWidth.value) * depth;
    const y = ((mouseY.value - windowHeight.value / 2) / windowHeight.value) * depth;
    return {
        transform: `translateZ(${depth}px) translateX(${x}px) translateY(${y}px)`,
    };
};
</script>

<template>
    <div class="parallax-wrapper" ref="containerRef">
        <div class="parallax-content" :style="cardStyle">
            <!-- Background Layer: Active environment -->
            <div class="layer" :style="getParallaxStyle(60)">
                <div class="bg-shape circle-1"></div>
                <div class="bg-shape circle-2"></div>
                <div class="bg-shape circle-3"></div>
            </div>

            <!-- Text Layer: Moderate movement -->
            <!-- <div class="layer text-layer" :style="getParallaxStyle(40)">
                <h1 class="title">Hello Friend.</h1>
                <p class="subtitle">Welcome to my space</p>
            </div> -->

            <!-- Image Layer: Character (Stable, minimal movement) -->
            <div class="layer image-layer" :style="getParallaxStyle(15)">
                <img src="/img/LoXi/LoXi_Logo.png" alt="Character" class="character-img" />
            </div>

            <!-- Floating Elements: Highly active foreground environment -->
            <div class="layer" :style="getParallaxStyle(100)">
                <div class="float-item item-1"></div>
                <div class="float-item item-2"></div>
                <div class="float-item item-3"></div>
                <div class="float-item item-4"></div>
            </div>
        </div>

        <!-- Scroll Hint -->
        <div class="scroll-hint">
            <span class="scroll-text">Scroll Down</span>
            <div class="scroll-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 18L17 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M7 6L12 11L17 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
.parallax-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: -100px;
    /* Counteract loxi_page top padding */
}

.parallax-content {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
}

/* Background Shapes */
.bg-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.5;
}

.circle-1 {
    top: 20%;
    left: 20%;
    width: 200px;
    height: 200px;
    background: var(--theme-color, #4664b0);
}

.circle-2 {
    width: 300px;
    height: 300px;
    top: 20%;
    left: 80%;
    background: #ff6b6b;
}

.circle-3 {
    width: 150px;
    top: 80%;
    left: 80%;
    height: 150px;
    background: #f0932b;
}



/* Text Styling */
.text-layer {
    z-index: 2;
    text-align: center;
    /* text-shadow: 0 10px 20px rgba(0,0,0,0.1); */
}

.title {
    font-size: 6rem;
    font-weight: 800;
    color: var(--text-color, #333);
    margin-bottom: 0.5rem;
    letter-spacing: -2px;
}

.subtitle {
    font-size: 1.8rem;
    color: var(--text-color, #555);
    opacity: 0.8;
    font-weight: 300;
}

/* Image Styling */
.image-layer {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.character-img {
    max-height: 85vh;
    max-width: 85vw;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    transition: transform 0.2s ease-out;
}

/* Floating Elements */
.float-item {
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.item-1 {
    width: 80px;
    height: 80px;
    top: 15%;
    right: 20%;
    transform: rotate(15deg);
}

.item-2 {
    width: 50px;
    height: 50px;
    bottom: 25%;
    left: 15%;
    transform: rotate(-10deg);
    background: var(--theme-color, #4664b0);
    opacity: 0.6;
}

.item-3 {
    width: 30px;
    height: 30px;
    top: 30%;
    left: 25%;
    border-radius: 50%;
    background: #ff6b6b;
    opacity: 0.5;
}

.item-4 {
    width: 100px;
    height: 60px;
    bottom: 15%;
    right: 30%;
    background: transparent;
    border: 2px solid var(--text-color);
    opacity: 0.1;
}

/* Scroll Hint */
.scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--text-color);
    opacity: 0.7;
    z-index: 10;
    animation: bounce 2s infinite;
}

.scroll-text {
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.scroll-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateX(-50%) translateY(0);
    }

    40% {
        transform: translateX(-50%) translateY(-10px);
    }

    60% {
        transform: translateX(-50%) translateY(-5px);
    }
}

/* Dark mode adaptation if needed */
@media (prefers-color-scheme: dark) {
    .float-item {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
}
</style>
