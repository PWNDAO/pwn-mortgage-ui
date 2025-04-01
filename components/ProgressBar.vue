<template>
    <div class="progress-bar">
        <div class="progress-bar__fill" :style="{ width: `${progress}%` }"/>
        <div class="progress-bar__text" :class="{ 'highlight': isHighlighting }">
            {{ currentValue.toLocaleString() }} / {{ maxValue.toLocaleString() }} USDC
        </div>
    </div>
</template>

<script setup lang="ts">
const maxValue = 150000
const currentValue = ref(91420)
const progress = computed(() => (currentValue.value / maxValue) * 100)

const isHighlighting = ref(false)

const updateProgress = () => {
    // Generate random increment between 1 and 2000
    const increment = Math.floor(Math.random() * 1500) + 1
    
    // Only update if we won't exceed maxValue
    if (currentValue.value + increment < maxValue) {
        currentValue.value += increment
        // Trigger highlight animation
        isHighlighting.value = true
        setTimeout(() => {
            isHighlighting.value = false
        }, 300) // Animation duration
    }
    
    // Schedule next update with random delay (1-5 seconds)
    const nextDelay = Math.floor(Math.random() * 4000) + 1000
    setTimeout(updateProgress, nextDelay)
}

// Start the updates
onMounted(() => {
    updateProgress()
})
</script>

<style scoped>
.progress-bar {
    position: relative;
    border: 1px solid #696678;
    padding: 0.5rem;
    overflow: hidden;

    &__fill {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: linear-gradient(to right, #111111, var(--primary-color-2));
        z-index: -1;
    }

    &__text {
        font-size: 1.75rem;
        text-align: center;
        position: relative;
        font-weight: bold;

        transition: color 0.3s ease;

        &.highlight {
            color: var(--primary-color);
        }
    }
}
</style>
