<template>
    <div class="supporters-box">
        <div class="supporters-box__header">
            <h3>Lenders</h3>
        </div>
        <div class="supporters-box__list">
            <div v-for="supporter in supportersList" :key="supporter.address" class="supporters-box__item">
                <span>{{ supporter.address }}</span>
                <span>{{ supporter.amount }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const supportersList = [
    {
        address: 'Sum of all private investors',
        amount: '42,088 USDC'
    },
    {
        address: 'bigmoneyinvestor.eth',
        amount: '21,069 USDC'
    },
    {
        address: 'trendcatcher.eth',
        amount: '30,054 USDC'
    },
    {
        address: 'nooneisreadingthis.eth',
        amount: '420 USDC'
    },
    {
        address: 'vitalik.eth',
        amount: '37,045 USDC'
    },
    {
        address: 'tvojemama.base.eth',
        amount: '1337 USDC'
    },
]
</script>

<style scoped>
.supporters-box {
    border: 1px solid var(--border-color);
    padding: 1rem;

    &__item {
        display: flex;
        justify-content: space-between;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }

    &__header {
        margin-bottom: 1rem;
    }
}
</style>
