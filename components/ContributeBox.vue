<template>
    <div class="contribute-box">
        <h3 class="contribute-box__heading">Contribute to the crowdloan</h3>
        <div class="contribute-box__lend-button-container">
            <button class="contribute-box__button" @click="openModal">
                <div>
                    <div class="contribute-box__lend-text">FUND THIS LOAN</div>
                    <div class="contribute-box__rewards">
                        <img src="/icons/rep-score.svg" alt="Reputation score" width="12" height="12">
                        <span>earn rewards</span>
                    </div>
                </div>
                <div>
                    <div class="contribute-box__usdc-icon">
                        <img src="/icons/usdc.svg" alt="USDC" width="16" height="16" >
                    </div>
                    <div class="contribute-box__upgrade-text">+ upgrade yield from AAVE/Morpho</div>
                </div>
            </button>
        </div>
        <div class="contribute-box__deadline">
            <span>Deadline: {{ countdownText }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import useModalTweet from '@/stores/useModalTweet'

const { openModal } = useModalTweet()

// Set deadline to 03.04.2025 1 pm CET
const deadline = new Date('2025-04-02T12:00:00+02:00').getTime()
const countdownText = ref('')
let timer: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
    const now = new Date().getTime()
    const distance = deadline - now

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    let string = ``

    // Include days in the countdown if there are any
    if (days > 0) string += `${days}d `
    if (hours > 0) string += `${hours}h `
    if (minutes > 0) string += `${minutes}m `
    if (seconds > 0) string += `${seconds}s`

    // Ensure we always have a non-empty string
    if (string === '') {
        string = '0s'
    }

    countdownText.value = string

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
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 1.1rem;
        }
        
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    &__lend-text {
        text-align: left;
        font-size: 1.5rem;
        color: var(--primary-color);
        font-family: var(--font-family-screener);
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 1.3rem;
        }
        
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }
    
    &__rewards {
        color: var(--primary-color);
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 0.85rem;
        }
        
        @media (max-width: 480px) {
            font-size: 0.8rem;
        }
    }
    
    &__usdc-icon {
        display: flex;
        justify-content: end;
        margin-bottom: 0.25rem;
    }
    
    &__upgrade-text {
        color: var(--subtitle-color);
        font-size: 0.75rem;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 0.7rem;
        }
        
        @media (max-width: 480px) {
            font-size: 0.7rem;
        }
    }
    
    &__deadline {
        margin-top: 1.5rem;
        color: var(--subtitle-color);
        text-align: right;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 0.85rem;
            margin-top: 1rem;
        }
        
        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    &__button {
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color-darker);
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        transition: all 0.3s;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            padding: 0.85rem;
        }
        
        @media (max-width: 480px) {
            padding: 0.75rem;
            font-size: 0.9rem;
        }

        &:hover {
            cursor: pointer;
            background-color: var(--primary-color-2);
        }
    }
}
</style>
