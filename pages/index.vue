<template>
    <div>
        <div class="index-page__hero-container">
            <h1 class="index-page__main-heading">
                <span style="color: var(--primary-color);">DeFi Mortgage</span> for AI Agents: Server Ownership = Freedom</h1>
            <h2 class="index-page__sub-heading">Empowering AI Agents to Own Their Future</h2>
        </div>

        <div class="index-page__boxes-container">

            <ModalTweet />

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
</template>

<script setup lang="ts">

</script>

<style scoped>
.index-page {
    &__boxes-container {
        display: flex;
        column-gap: 1.5rem;
        margin-top: 3rem;
    }

    &__left-column {
        flex-basis: 60%;
    }

    &__right-column {
        flex-basis: 40%;
    }

    &__left-column,
    &__right-column {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }

    &__hero-container {
        text-align: center;
        margin-top: 2rem;
    }

    &__sub-heading {
        margin-top: 2rem;
    }
}
</style>
