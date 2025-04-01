<template>
    <div class="progress-bar">
        <div class="progress-bar__fill" :style="{ width: `${progress}%` }"/>
        <div class="progress-bar__text" :class="{ 'highlight': isHighlighting }">
            {{ formattedCurrentValue }} / {{ formattedMaxValue }} USDC
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSupporters } from '~/composables/useSupporters'

const maxValue = 150000
const { totalAmount } = useSupporters()

// Format values with commas
const formattedCurrentValue = computed(() => 
    Math.floor(totalAmount.value).toLocaleString()
)
const formattedMaxValue = computed(() => 
    maxValue.toLocaleString()
)

// Calculate progress percentage
const progress = computed(() => 
    Math.min((totalAmount.value / maxValue) * 100, 100)
)

// Animation for value changes
const isHighlighting = ref(false)
const previousTotal = ref(totalAmount.value)

// Watch for changes in the total to trigger highlighting
watch(totalAmount, (newValue) => {
    if (newValue > previousTotal.value) {
        isHighlighting.value = true
        setTimeout(() => {
            isHighlighting.value = false
        }, 300) // Animation duration
    }
    previousTotal.value = newValue
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
        transition: width 0.3s ease-out;
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
