export type THit = {
  largeImageURL: string;
};

export type TResult = {
    total: number,
    totalHits: number,
    hits: THit[]
}

export type TUseFetchReturn = [photos: string[], isError: boolean, message: string, isLoading: boolean]