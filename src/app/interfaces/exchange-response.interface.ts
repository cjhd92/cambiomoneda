export interface ExchangeResponse {
    query: {
        apikey: string,
        base_currency: string,
        timestamp: number
    },
    data: {
        [key: string]: number
    }
}