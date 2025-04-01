<template>
    <div class="terms-box">
        <h3 class="terms-box__heading">Crowdsourced DeFi mortgage - terms</h3>
        <p class="terms-box__subheading">Crypto-backed mortgage-like crowdsourced DeFi loan with gradual installments.</p>
        <div class="terms-box__single-boxes-container">
            <div class="terms-box__single-box-container">
                <div class="terms-box__single-box-heading">Collateral</div>
                <div class="terms-box__single-box-value">WETH</div>
            </div>
            <div class="terms-box__single-box-container">
                <div class="terms-box__single-box-heading">Credit</div>
                <div class="terms-box__single-box-value">USDC</div>
            </div>
            <div class="terms-box__single-box-container">
                <div class="terms-box__single-box-heading">APR (fixed)</div>
                <div class="terms-box__single-box-value">42.74%</div>
            </div>
            <div class="terms-box__single-box-container">
                <div class="terms-box__single-box-heading">LTV</div>
                <div class="terms-box__single-box-value">75%</div>
            </div>
            <div class="terms-box__single-box-container">
                <div class="terms-box__single-box-heading">Duration</div>
                <div class="terms-box__single-box-value">2 years</div>
            </div>
        </div>
        <div style="margin-top: 1.5rem; margin-bottom: 1rem; font-family: var(--font-family-screener); color: var(--subtitle-color);">Raised so far</div>
        <ProgressBar />
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.terms-box {
    border: 1px solid var(--border-color);
    padding: 1rem;

    &__heading {
        font-size: 1.375rem;
        
        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }

    &__subheading {
        color: var(--subtitle-color);
        font-size: 1.125rem;
        margin-bottom: 1rem;
        margin-top: 0.25rem;
        
        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    &__single-boxes-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }
        
        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        
        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }

    &__single-box-container {
        border: 1px solid var(--border-color);
        padding: 0.75rem;
        
        &:nth-child(5) {
            grid-column: 1 / -1;
            
            @media (min-width: 769px) and (max-width: 1100px) {
                grid-column: auto;
            }
        }
        
        @media (max-width: 768px) {
            padding: 0.5rem;
        }
    }

    &__single-box-heading {
        font-size: 0.875rem;
        color: var(--subtitle-color);
        margin-bottom: 0.25rem;
    }

    &__single-box-value {
        font-size: 1.75rem;
        
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
        
        @media (min-width: 769px) and (max-width: 1100px) {
            font-size: 1.5rem;
        }
    }
}
</style>
