<template>
    <div class="supporters-box">
        <div class="supporters-box__header">
            <h3>Lenders</h3>
        </div>
        <div class="supporters-box__list">
            <div v-for="supporter in displayedSupporters" :key="supporter.address + supporter.timestamp" class="supporters-box__item">
                <span class="supporters-box__address" :title="supporter.address">{{ formatAddress(supporter.address) }}</span>
                <span class="supporters-box__amount" :class="{ 'highlight': isRecent(supporter.timestamp) }">
                    {{ formatAmount(supporter.amount) }} USDC
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSupporters } from '~/composables/useSupporters'

const { supportersList } = useSupporters()

// Only show the top 10 supporters
const displayedSupporters = computed(() => {
    const sortedSupporters = [...supportersList.value].sort((a, b) => b.amount - a.amount)
    return sortedSupporters
})

// Format addresses to be more readable
const formatAddress = (address: string) => {
    // Don't truncate named addresses (those ending with .eth)
    if (address.endsWith('.eth')) {
        return address
    }
    // Truncate regular addresses
    return address.substring(0, 6) + '...' + address.substring(address.length - 4)
}

// Format amount with commas and 2 decimal places
const formatAmount = (amount: number) => {
    return amount >= 1000 
        ? Math.floor(amount).toLocaleString()
        : amount.toFixed(2)
}

// Check if a transaction is recent (last 5 seconds)
const isRecent = (timestamp: number) => {
    return Date.now() - timestamp < 5000
}
</script>

<style scoped>
.supporters-box {
    border: 1px solid var(--border-color);
    padding: 1rem;

    &__list {
        overflow-y: auto;
        max-height: 300px;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            max-height: 400px;
        }
        
        @media (max-width: 768px) {
            max-height: 200px;
        }
    }

    &__item {
        display: flex;
        justify-content: space-between;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 0.95rem;
        }
        
        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    &__header {
        margin-bottom: 1rem;
    }

    &__amount {
        transition: color 0.3s ease;
        font-weight: bold;
    }

    &__amount.highlight {
        color: var(--primary-color);
    }

    &__address {
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            max-width: 150px;
        }
        
        @media (max-width: 480px) {
            max-width: 130px;
        }
    }
}
</style>
