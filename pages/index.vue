<template>
    <div>
        <div class="index-page__hero-container">
            <h1 class="index-page__main-heading">
                <span style="color: var(--primary-color);">DeFi Mortgage</span> for AI Agents: Server Ownership = Freedom</h1>
            <h2 class="index-page__sub-heading">Empowering AI Agents to Own Their Future</h2>
        </div>

        <div class="index-page__content">
            <ModalTweet class="index-page__modal-tweet" />

            <div class="index-page__grid-container">
                <div class="index-page__left-column">
                    <TermsBox />
                    <DescriptionBox />
                </div>
                <div class="index-page__right-column">
                    <ContributeBox />
                    <SupportersBox />
                    <!--<RewardsBox />-->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.index-page {
    &__content {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }

    &__grid-container {
        display: grid;
        grid-template-columns: minmax(0, 57%) minmax(0, 43%);
        gap: 1.5rem;
        
        @media (min-width: 769px) and (max-width: 1100px) {
            grid-template-columns: minmax(0, 55%) minmax(0, 45%);
            gap: 1rem;
        }
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    &__left-column {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
        min-width: 0; /* Important for preventing overflow */
    }

    &__right-column {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
        min-width: 0; /* Important for preventing overflow */
    }

    &__hero-container {
        text-align: center;
        margin-top: 2rem;
        padding: 0 1rem;
    }

    &__main-heading {
        @media (max-width: 1100px) {
            font-size: 1.75rem;
            line-height: 1.3;
        }
    }

    &__sub-heading {
        margin-top: 2rem;
        
        @media (max-width: 1100px) {
            font-size: 1.25rem;
            margin-top: 1rem;
        }
    }
}
</style>
