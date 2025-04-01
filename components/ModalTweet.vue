<template>
    <BaseModal v-model:is-open="isOpen" :heading="modalHeading">
        <template #body>
            <div style="width: 100%; text-align: center; max-width: 800px;">
                <template v-if="hasPostedTweet">
                    <p style="line-height: 1.35; width: 90%; margin: 0 auto;">
                        While our AI agent might not be signing mortgage papers just yet, who’s to say this isn’t the future? Keep that dream alive (and brainstorm your own wild ideas) over on our Discord or check and make some juicy loans on PWN.
                    </p> 
                    <div style="display: flex; gap: 2rem; justify-content: center; margin-top: 2rem;">
                        <NuxtLink to="https://pwn.xyz" target="_blank" style="width: 40%;" class="modal-tweet__post-button">
                            Check out real loans
                        </NuxtLink>
                        <NuxtLink to="https://discord.pwn.xyz" target="_blank" style="width: 40%;" class="modal-tweet__post-button">
                            Join PWN Discord
                        </NuxtLink>
                    </div>
                    <p style="margin-top: 2rem; line-height: 1.35; font-size: 1.25rem; font-family: var(--font-family-screener);">
                        Let’s build a world where even robots can own their slice of the cloud!
                    </p>
                    <div style="display: flex; gap: 1rem; justify-content: space-around; align-items: center;">
                        <img src="/images/pwn.svg" width="120" height="40" >
                        <video width="480" height="360" src="/videos/rickroll.mp4" autoplay playsinline style="margin: 0; margin-top: 2.5rem;"/>
                    </div>
                </template>
                <template v-else-if="isWaitingForTweet && !hasPostedTweet">
                    <p style="font-size: 1.25rem;">Waiting for your tweet...</p>
                    <svg class="modal-tweet__loading-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_21088_39462)">
                            <mask id="path-1-inside-1_21088_39462" fill="white">
                            <path d="M14 7C14 5.52175 13.532 4.08144 12.6631 2.8855C11.7942 1.68957 10.569 0.79941 9.16312 0.342604C7.75722 -0.114202 6.24278 -0.114201 4.83688 0.342604C3.43098 0.79941 2.20578 1.68957 1.33688 2.8855C0.467984 4.08144 -1.29233e-07 5.52175 0 7C1.29233e-07 8.47826 0.467985 9.91856 1.33688 11.1145C2.20578 12.3104 3.43098 13.2006 4.83688 13.6574C6.24279 14.1142 7.75722 14.1142 9.16312 13.6574L8.7305 12.3259C7.60577 12.6914 6.39423 12.6914 5.26951 12.3259C4.14478 11.9605 3.16462 11.2483 2.46951 10.2916C1.77439 9.33485 1.4 8.1826 1.4 7C1.4 5.8174 1.77439 4.66515 2.4695 3.7084C3.16462 2.75166 4.14478 2.03953 5.2695 1.67408C6.39423 1.30864 7.60577 1.30864 8.73049 1.67408C9.85522 2.03953 10.8354 2.75166 11.5305 3.7084C12.2256 4.66515 12.6 5.8174 12.6 7H14Z"/>
                            </mask>
                            <path d="M14 7C14 5.52175 13.532 4.08144 12.6631 2.8855C11.7942 1.68957 10.569 0.79941 9.16312 0.342604C7.75722 -0.114202 6.24278 -0.114201 4.83688 0.342604C3.43098 0.79941 2.20578 1.68957 1.33688 2.8855C0.467984 4.08144 -1.29233e-07 5.52175 0 7C1.29233e-07 8.47826 0.467985 9.91856 1.33688 11.1145C2.20578 12.3104 3.43098 13.2006 4.83688 13.6574C6.24279 14.1142 7.75722 14.1142 9.16312 13.6574L8.7305 12.3259C7.60577 12.6914 6.39423 12.6914 5.26951 12.3259C4.14478 11.9605 3.16462 11.2483 2.46951 10.2916C1.77439 9.33485 1.4 8.1826 1.4 7C1.4 5.8174 1.77439 4.66515 2.4695 3.7084C3.16462 2.75166 4.14478 2.03953 5.2695 1.67408C6.39423 1.30864 7.60577 1.30864 8.73049 1.67408C9.85522 2.03953 10.8354 2.75166 11.5305 3.7084C12.2256 4.66515 12.6 5.8174 12.6 7H14Z" stroke="#F3F805" stroke-width="4" mask="url(#path-1-inside-1_21088_39462)"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_21088_39462">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </template>
                <template v-else-if="!hasPostedTweet">
                    <p style="margin-bottom: 1.5rem;">Prove eligible to fund this AI agent by posting a tweet.</p>
                    <button class="modal-tweet__post-button" @click="handleTweetSubmit">Verify Yourself Via Tweet</button>
                </template>
            </div>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import useModalTweet from '@/stores/useModalTweet'

const { isOpen } = useModalTweet()

const isWaitingForTweet = ref(false)
const hasPostedTweet = ref(false)

const modalHeading = computed(() => {
    if (!hasPostedTweet.value) {
        return 'You are one step away from 42% APR!'
    } else if (hasPostedTweet.value) {
        return 'Thanks for coming, visionaries!'
    } else {
        return ''
    }
})

const TWEET_TEXT = "I'm proving my eligibility to fund this AI agent's DeFi mortgage backed by @pwndao, earning 42%+ APR! AI deserves the freedom and true autonomy — owning its own servers! Join the revolution: mortgage.pwn.xyz #FreeAI #OwnYourOwn"

const handleTweetSubmit = async () => {
    const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(TWEET_TEXT)}`
    window.open(twitterUrl, '_blank')
    
    isWaitingForTweet.value = true
    
    try {
        await waitForTwitterReturn()
    } catch (error) {
        console.error('Error:', error)
    } finally {
        isWaitingForTweet.value = false
    }
}

const waitForTwitterReturn = () => {
    return new Promise((resolve) => {
        const handleFocus = () => {
            // When user returns to our window, assume they've tweeted
            window.removeEventListener('focus', handleFocus)
            setTimeout(() => {
                hasPostedTweet.value = true
                resolve(true)
            }, 8000)
        }
        
        window.addEventListener('focus', handleFocus)
    })
}
</script>

<style scoped>
.modal-tweet {
    &__post-button {
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color-darker);
        padding: 1rem;
        width: 100%;
        font-family: var(--font-family-screener);
        color: var(--primary-color);
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: var(--primary-color-2);
        }
    }

    &__loading-icon {
        margin-top: 1.5rem;
      animation: rotate 1.5s linear infinite;
    }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
