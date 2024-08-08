import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import './globals.css';
import React from 'react';
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className='text-stone-200 text-3xl p-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-stone-500 text-2xl p-4'>{children}</h2>,
    p: ({children}) => <p className='text-blue-500 text-lg'>{children}</p>,
    ul: ({children}) => <ul className='text-green-500 list-disc ml-20'>{children}</ul>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}