import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeEntryFields {
    entryTitle: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    entryType?: EntryFieldTypes.Symbol;
    details?: EntryFieldTypes.RichText;
    date?: EntryFieldTypes.Date;
    articleImage?: EntryFieldTypes.AssetLink;
    entryImage?: EntryFieldTypes.AssetLink;
    authorName?: EntryFieldTypes.Symbol;
    callout?: EntryFieldTypes.Symbol;
    postContent?: EntryFieldTypes.RichText;
    gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    postReferences?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    categoryName?: EntryFieldTypes.Symbol;
}

export type TypeEntrySkeleton = EntrySkeletonType<TypeEntryFields, "entry">;
export type TypeEntry<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeEntrySkeleton, Modifiers, Locales>;
