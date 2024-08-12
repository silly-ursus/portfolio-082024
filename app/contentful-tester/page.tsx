import { draftMode } from 'next/headers'
import { fetchGardenPosts } from '../contentful/gardenPosts'
import Link from 'next/link'
import React from 'react'
import { Separator } from '../../@/components/ui/separator'

async function Home() {
	// Fetch blog posts using the content preview
	// if draft mode is enabled:
	const gardenPosts = await fetchGardenPosts({ preview: draftMode().isEnabled })

	return (
		<main className="p-[6vw]">
			<div className="prose bg-white p-24">
      <h1 className="text-emerald-500 text-9xl font-bold font-['portia'] inline">
          The Garden
        </h1>
        <Separator/>
				<ul>
					{gardenPosts.map((gardenPost) => {
						return (
							<li className="text-cyan-500 text-2xl mt-4" key={gardenPost.slug}>
								<Link href={`/${gardenPost.slug}`}>{gardenPost.title}</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</main>
	)
}

export default Home