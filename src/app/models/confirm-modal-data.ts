export interface ConfirmDialogData {
    name: string,
    title: string,
    description: string,
    confirmButtonText: string,
    cancelButtonText: string,
    confirmationCallback: () => any
}