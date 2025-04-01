<template>
    <div class="contribute-box">
        <h3 class="contribute-box__heading">Contribute to the crowdloan</h3>
        <div class="contribute-box__lend-button-container">
            <button class="contribute-box__button" @click="openModal">
                <div>
                    <div style="text-align: left; font-size: 1.5rem; color: var(--primary-color); font-family: var(--font-family-screener);">LEND</div>
                    <div style="color: var(--primary-color); display: flex; align-items: center; column-gap: 0.25rem;">
                        <img src="/icons/rep-score.svg" alt="Reputation score" width="12" height="12">
                        <span>earn rewards</span>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: end; margin-bottom: 0.25rem;">
                        <img src="/icons/usdc.svg" alt="USDC" width="16" height="16" >
                    </div>
                    <div style="color: var(--subtitle-color); font-size: 0.75rem;">+ upgrade yield from AAVE/Morpho</div>
                </div>
            </button>
        </div>
        <div style="margin-top: 1.5rem; color: var(--subtitle-color); text-align: right;">
            <span>Deadline: {{ countdownText }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import useModalTweet from '@/stores/useModalTweet'

const { openModal } = useModalTweet()

// Set your target deadline timestamp here
const now = new Date()
const deadline = now.getTime() + (11 * 58 * 59 * 1000)
const countdownText = ref('')
let timer = null

const updateCountdown = () => {
    const now = new Date().getTime()
    const distance = deadline - now

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    countdownText.value = `${hours}h ${minutes}m ${seconds}s`

    if (distance < 0) {
        if (timer) clearInterval(timer)
        countdownText.value = 'Deadline passed'
    }
}

onMounted(() => {
    updateCountdown()
    timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
.contribute-box {
    border: 1px solid var(--border-color);
    padding: 1rem;

    &__heading {
        margin-bottom: 1rem;
    }

    &__button {
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color-darker);
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;

        transition: all 0.3s;

        &:hover {
            cursor: pointer;
            background-color: var(--primary-color-2);
        }
    }
}
</style>
