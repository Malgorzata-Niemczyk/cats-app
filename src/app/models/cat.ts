export interface Cat {
   url: string,
   id: string,
   breeds: [];
   name: string,
   temperament: string,
   life_span: string,
   origin: string,
   weight: {
      metric: string
   },
   image: {
      url: string
   },
   description: string,
   wikipedia_url: string
}