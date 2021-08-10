export interface modalData {
    name: string,
    title: string,
    description: string,
    actionButtonText: string,
    selectedCat: {
        id: string
    }
    catsFavCollection: [],
    callBackMethod: () => void
}