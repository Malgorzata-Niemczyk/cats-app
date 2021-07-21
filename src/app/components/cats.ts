export interface Cats {
   id: string,
   name: string,
   temperament?: string,
   life_span?: string,
   origin?: string,
   weight?: {
      imperial: string
   },
   image?: {
      url: string
   } 
}