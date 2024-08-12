import { TypeEntrySkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type gardenPost = Entry<TypeEntrySkeleton, undefined, string>

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface GardenPost {
	title: string
	slug: string | undefined
	body: RichTextDocument | null
	image: ContentImage | null
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulBlogPost(gardenPost?: gardenPost): GardenPost | null {
	if (!gardenPost) {
		return null
	}

	return {
		title: gardenPost.fields.entryTitle || '',
		slug: gardenPost.fields.slug,
		body: gardenPost.fields.postContent || null,
		image: parseContentfulContentImage(gardenPost.fields.articleImage),
	}
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchgardenPostsOptions {
	preview: boolean
}
export async function fetchGardenPosts({ preview }: FetchgardenPostsOptions): Promise<GardenPost[]> {
	const contentful = contentfulClient({ preview })

	const gardenPostsResult = await contentful.getEntries<TypeEntrySkeleton>({
		content_type: 'entry',
		include: 2,
		order: ['fields.entryTitle'],
	})

	return gardenPostsResult.items.map((gardenPost) => parseContentfulBlogPost(gardenPost) as GardenPost)
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchBlogPostOptions {
	slug: string
	preview: boolean
}
export async function fetchBlogPost({ slug, preview }: FetchBlogPostOptions): Promise<GardenPost | null> {
	const contentful = contentfulClient({ preview })

	const gardenPostsResult = await contentful.getEntries<TypeEntrySkeleton>({
		content_type: 'entry',
		'fields.slug': slug,
		include: 2,
	})

	return parseContentfulBlogPost(gardenPostsResult.items[0])
}