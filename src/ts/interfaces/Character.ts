export interface Character {
	id: number
	name: string
	description: string
    thumbnail: Thumbnail
}

interface Thumbnail {
	path: string
	url: string
}
