interface ThunkResponse<T = void> {
    status: 'fulfilled' | 'pending' | 'idle' | 'rejected',
    data?: T,
    error: string | null
}