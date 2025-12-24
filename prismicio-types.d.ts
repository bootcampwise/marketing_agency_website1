import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | HeroSlice
  | ServicesSlice
  | CtaSlice
  | CaseStudiesSlice
  | WorkingProcessSlice
  | TeamSlice
  | TestimonialsSlice
  | ContactSlice;

interface HomepageDocumentData {
  meta_title: prismic.KeyTextField;
  meta_description: prismic.KeyTextField;
  meta_image: prismic.ImageField<never>;
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}

export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export interface CaseStudiesSliceDefaultItem {
  case_description: prismic.KeyTextField;
}

export interface CaseStudiesSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
}

export type CaseStudiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CaseStudiesSliceDefaultPrimary>,
  Simplify<CaseStudiesSliceDefaultItem>
>;

type CaseStudiesSliceVariation = CaseStudiesSliceDefault;

export type CaseStudiesSlice = prismic.SharedSlice<
  "case_studies",
  CaseStudiesSliceVariation
>;

export interface ContactSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
  contact_image: prismic.ImageField<never>;
}

export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

type ContactSliceVariation = ContactSliceDefault;

export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

export interface CtaSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
  button_text: prismic.KeyTextField;
  cta_image: prismic.ImageField<never>;
}

export type CtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSliceDefaultPrimary>,
  never
>;

type CtaSliceVariation = CtaSliceDefault;

export type CtaSlice = prismic.SharedSlice<"cta", CtaSliceVariation>;

export interface HeroSliceDefaultItem {
  logo: prismic.ImageField<never>;
}

export interface HeroSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
  button_text: prismic.KeyTextField;
  hero_image: prismic.ImageField<never>;
}

export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

type HeroSliceVariation = HeroSliceDefault;

export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

export interface ServicesSliceDefaultItem {
  title_line_1: prismic.KeyTextField;
  title_line_2: prismic.KeyTextField;
  service_image: prismic.ImageField<never>;
  background_color: prismic.KeyTextField;
  text_color: prismic.KeyTextField;
  title_background_color: prismic.KeyTextField;
}

export interface ServicesSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
}

export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  Simplify<ServicesSliceDefaultItem>
>;

type ServicesSliceVariation = ServicesSliceDefault;

export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

export interface TeamSliceDefaultItem {
  name: prismic.KeyTextField;
  role: prismic.KeyTextField;
  experience: prismic.KeyTextField;
  avatar: prismic.ImageField<never>;
}

export interface TeamSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
  show_button: prismic.BooleanField;
  button_text: prismic.KeyTextField;
}

export type TeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSliceDefaultPrimary>,
  Simplify<TeamSliceDefaultItem>
>;

type TeamSliceVariation = TeamSliceDefault;

export type TeamSlice = prismic.SharedSlice<"team", TeamSliceVariation>;

export interface TestimonialsSliceDefaultItem {
  quote: prismic.KeyTextField;
  author: prismic.KeyTextField;
  position: prismic.KeyTextField;
}

export interface TestimonialsSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
}

export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  Simplify<TestimonialsSliceDefaultItem>
>;

type TestimonialsSliceVariation = TestimonialsSliceDefault;

export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

export interface WorkingProcessSliceDefaultItem {
  step_number: prismic.KeyTextField;
  step_title: prismic.KeyTextField;
  step_description: prismic.KeyTextField;
}

export interface WorkingProcessSliceDefaultPrimary {
  heading: prismic.KeyTextField;
  description: prismic.KeyTextField;
}

export type WorkingProcessSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkingProcessSliceDefaultPrimary>,
  Simplify<WorkingProcessSliceDefaultItem>
>;

type WorkingProcessSliceVariation = WorkingProcessSliceDefault;

export type WorkingProcessSlice = prismic.SharedSlice<
  "working_process",
  WorkingProcessSliceVariation
>;

declare module "@prismicio/client" {
  interface Content {
    homepage: HomepageDocument;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      CaseStudiesSlice,
      CaseStudiesSliceDefaultItem,
      CaseStudiesSliceDefaultPrimary,
      CaseStudiesSliceDefault,
      CaseStudiesSliceVariation,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceDefault,
      ContactSliceVariation,
      CtaSlice,
      CtaSliceDefaultPrimary,
      CtaSliceDefault,
      CtaSliceVariation,
      HeroSlice,
      HeroSliceDefaultItem,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      ServicesSlice,
      ServicesSliceDefaultItem,
      ServicesSliceDefaultPrimary,
      ServicesSliceDefault,
      ServicesSliceVariation,
      TeamSlice,
      TeamSliceDefaultItem,
      TeamSliceDefaultPrimary,
      TeamSliceDefault,
      TeamSliceVariation,
      TestimonialsSlice,
      TestimonialsSliceDefaultItem,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceDefault,
      TestimonialsSliceVariation,
      WorkingProcessSlice,
      WorkingProcessSliceDefaultItem,
      WorkingProcessSliceDefaultPrimary,
      WorkingProcessSliceDefault,
      WorkingProcessSliceVariation,
    };
  }
}
