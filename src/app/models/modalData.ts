export interface modalData {
    name: string,
    title: string,
    description: string,
    confirmButtonText: string,
    cancelButtonText: string,
    confirmationCallback: () => void
}