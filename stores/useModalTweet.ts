
const isOpen = ref(false)

export default function useModalTweet() {
    return {
        isOpen,
        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,
    }
}