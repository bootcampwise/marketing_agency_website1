import {
  Content,
  ImageField,
  KeyTextField,
  LinkField,
  RichTextField,
  Slice,
  SliceZone,
  BooleanField,
  SharedSlice,
  SharedSliceVariation,
  NumberField,
} from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  logo: string;
  date: string;
  badgeType?: "Tutorial" | "Article";
  slug: string;
}

export interface PricingCardProps {
  tier: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface ServiceCategoryProps {
  title: string;
  description: string;
  services: string[];
  imageUrl?: string;
  imageEmoji?: string;
  isReversed?: boolean;
}

export interface AboutHeroSlice extends Slice {
  slice_type: "about_hero";
  variation?: string;
  primary: {
    heading: KeyTextField;
    description: KeyTextField;
    button_text: KeyTextField;
    show_client_logos: BooleanField;
  };
  items: {
    logo: ImageField;
    logo_alt: KeyTextField;
  }[];
}

export type AboutHeroProps = SliceComponentProps<AboutHeroSlice>;

export interface BlogHeroSlice extends Slice {
  slice_type: "blog_hero";
  variation: "default";
  primary: {
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
    show_search: BooleanField;
  };
}

export type BlogHeroProps = SliceComponentProps<BlogHeroSlice>;

export interface BlogPostContentSlice extends Slice {
  slice_type: "blog_post_content";
  variation?: string;
  items: {
    section_number: KeyTextField | RichTextField;
    section_title: KeyTextField | RichTextField;
    section_content: RichTextField;
  }[];
}

export type BlogPostContentProps = SliceComponentProps<BlogPostContentSlice>;

export interface BlogPostHeroSlice extends Slice {
  slice_type: "blog_post_hero";
  variation?: string;
  primary: {
    publish_date: KeyTextField;
    title: KeyTextField | RichTextField;
    author: KeyTextField | RichTextField;
    featured_image: ImageField;
    introduction: RichTextField;
  };
  items: {
    tag: KeyTextField | RichTextField;
  }[];
}

export type BlogPostHeroProps = SliceComponentProps<BlogPostHeroSlice>;

export interface BlogPostsSlice extends Slice {
  slice_type: "blog_posts";
  primary: Record<string, never>;
  items: {
    title: KeyTextField | RichTextField;
    excerpt: KeyTextField | RichTextField;
    author: KeyTextField | RichTextField;
    author_image: ImageField;
    date: KeyTextField | RichTextField;
    badge_type: KeyTextField;
    slug: KeyTextField | RichTextField;
  }[];
}

export type BlogPostsProps = SliceComponentProps<BlogPostsSlice>;

export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

export interface CaseStudiesGridSlice extends Slice {
  slice_type: "case_studies_grid";
  variation?: string;
  primary: {
    section_title: KeyTextField | RichTextField;
  };
  items: {
    background_color: KeyTextField;
    case_study_image: ImageField;
    case_study_title: KeyTextField | RichTextField;
    category: KeyTextField | RichTextField;
  }[];
}

export type CaseStudiesGridProps = SliceComponentProps<CaseStudiesGridSlice>;

export type ClientLogosSliceDefaultPrimary = {
  heading: KeyTextField;
};

export type ClientLogosSliceDefaultItem = {
  logo: ImageField;
};

export type ClientLogosSlice = SharedSlice<
  "client_logos",
  SharedSliceVariation<
    "default",
    ClientLogosSliceDefaultPrimary,
    ClientLogosSliceDefaultItem
  >
>;

export type ClientLogosProps = SliceComponentProps<ClientLogosSlice>;

export type ContactProps = SliceComponentProps<Content.ContactSlice>;

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

export interface PartnerBannerSlice extends Slice {
  slice_type: "partner_banner";
  variation: "default";
  primary: {
    partner_link: KeyTextField | RichTextField;
    logo: ImageField;
    partner_name: KeyTextField | RichTextField;
    message_line1: KeyTextField | RichTextField;
    message_line2: KeyTextField | RichTextField;
  };
}

export type PartnerBannerProps = SliceComponentProps<PartnerBannerSlice>;

export interface PhilosophyBannerSlice extends Slice {
  slice_type: "philosophy_banner";
  variation?: string;
  primary: {
    heading: RichTextField;
    description: KeyTextField | RichTextField;
  };
  items: {
    nav_item: KeyTextField | RichTextField;
  }[];
}

export type PhilosophyBannerProps = SliceComponentProps<PhilosophyBannerSlice>;

export interface PricingHeroSlice extends Slice {
  slice_type: "pricing_hero";
  variation: "default";
  primary: {
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
  };
}

export type PricingHeroProps = SliceComponentProps<PricingHeroSlice>;

export interface PricingTiersSlice extends Slice {
  slice_type: "pricing_tiers";
  items: {
    tier: KeyTextField;
    description: KeyTextField;
    price: NumberField;
    features: KeyTextField;
    is_popular: BooleanField;
  }[];
}

export type PricingTiersProps = SliceComponentProps<PricingTiersSlice>;

export interface ServiceCardSlice extends Slice {
  slice_type: "service_card";
  variation?: string;
  primary: {
    bg_color: KeyTextField;
    has_wrapper: BooleanField;
    badge_text_line1: KeyTextField;
    badge_text_line2: KeyTextField;
    cta_link: KeyTextField | RichTextField;
    illustration: ImageField;
    what_we_offer: KeyTextField | RichTextField;
    cta_text: KeyTextField;
  };
  items: {
    benefit: KeyTextField | RichTextField;
  }[];
}

export type ServiceCardProps = SliceComponentProps<ServiceCardSlice>;

export interface ServiceCategorySlice extends Slice {
  slice_type: "service_category";
  variation?: string;
  primary: {
    category_title: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
    category_image: ImageField;
  };
  items: {
    feature: KeyTextField | RichTextField;
  }[];
}

export type ServiceCategorySliceProps =
  SliceComponentProps<ServiceCategorySlice>;

export interface ServiceDetailHeroSlice extends Slice {
  slice_type: "service_detail_hero";
  variation?: string;
  primary: {
    title: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
    button_text: KeyTextField;
    button_link: KeyTextField | RichTextField;
    hero_image: ImageField;
  };
}

export type ServiceDetailHeroProps =
  SliceComponentProps<ServiceDetailHeroSlice>;

export interface ServiceIconsSlice extends Slice {
  slice_type: "service_icons";
  variation?: string;
  primary: {
    section_title: KeyTextField | RichTextField;
  };
  items: {
    icon_image: ImageField;
    icon_label: KeyTextField | RichTextField;
  }[];
}

export type ServiceIconsProps = SliceComponentProps<ServiceIconsSlice>;

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

export interface ServicesCtaSlice extends Slice {
  slice_type: "services_cta";
  variation: "default";
  primary: {
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
    button_text: KeyTextField | RichTextField;
    button_link: KeyTextField | RichTextField;
  };
}

export type ServicesCtaProps = SliceComponentProps<ServicesCtaSlice>;

export interface ServicesHeroSlice extends Slice {
  slice_type: "services_hero";
  variation?: string;
  primary: {
    title: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
  };
}

export type ServicesHeroProps = SliceComponentProps<ServicesHeroSlice>;

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

export interface UseCaseHeroSlice extends Slice {
  slice_type: "use_case_hero";
  primary: {
    company_logo: ImageField;
    subheading: KeyTextField | RichTextField;
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
  };
}

export type UseCaseHeroProps = SliceComponentProps<UseCaseHeroSlice>;

export type WorkingProcessProps =
  SliceComponentProps<Content.WorkingProcessSlice>;
