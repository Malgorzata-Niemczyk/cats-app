export interface Cats {
   id: string,
   name: string,
   temperament?: string,
   life_span?: string,
   origin?: string,
   weight?: {
      metric: string
   },
   image?: {
      url: string
   } 
}