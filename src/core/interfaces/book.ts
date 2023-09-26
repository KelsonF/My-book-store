import { ULID } from 'ulidx'

export interface Book {
   id : ULID
   title: string
   amazon_link: string
   main_content: string
}