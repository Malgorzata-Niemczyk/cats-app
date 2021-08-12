export interface Cat {
   id: string,
   name: string,
   origin: string,
}

export interface BreedDetails {
   id: string,
   name: string,
   temperament: string,
   weight: {
      metric: string
   },
   life_span: string,
   origin: string,
   description: string,
   wikipedia_url: string,
   url: string
}

export interface SearchBreedResults {
   url: string,
   breeds: [BreedDetails],
}

