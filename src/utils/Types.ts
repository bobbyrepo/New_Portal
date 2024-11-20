export interface NewsCardsType {
    source: {
        id: null | string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: Date,
    content: string
}

export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsCardsType[];
}