import { TypeEntrySkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type blogPost = Entry<TypeEntrySkeleton, undefined, string>

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface BlogPost {
	title: string
	slug: string
	body: RichTextDocument | null
	image: ContentImage | null
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulBlogPost(blogPost?: blogPost): BlogPost | null {
	if (!blogPost) {
		return null
	}

	return {
		title: blogPost.fields.entryTitle || '',
		slug: blogPost.fields.slug || '',
		body: blogPost.fields.details || null,
		image: parseContentfulContentImage(blogPost.fields.articleImage),
	}
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchblogPostsOptions {
	preview: boolean
}
export async function fetchBlogPosts({ preview }: FetchblogPostsOptions): Promise<BlogPost[]> {
	const contentful = contentfulClient({ preview })

	const blogPostsResult = await contentful.getEntries<TypeEntrySkeleton>({
		content_type: 'entry',
		include: 2,
		order: ['fields.entryTitle'],
	})

	return blogPostsResult.items.map((blogPost) => parseContentfulBlogPost(blogPost) as BlogPost)
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchBlogPostOptions {
	slug: string
	preview: boolean
}
export async function fetchBlogPost({ slug, preview }: FetchBlogPostOptions): Promise<BlogPost | null> {
	const contentful = contentfulClient({ preview })

	const blogPostsResult = await contentful.getEntries<TypeEntrySkeleton>({
		content_type: 'entry',
		'fields.slug': slug,
		include: 2,
	})

	return parseContentfulBlogPost(blogPostsResult.items[0])
}