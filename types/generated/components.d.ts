import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta: Schema.Attribute.Component<'elements.button-link', false>;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksProductSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_product_sections';
  info: {
    displayName: 'Product Section';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSimple extends Struct.ComponentSchema {
  collectionName: 'components_blocks_simples';
  info: {
    displayName: 'Simple Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.button-link', false>;
  };
}

export interface ElementsBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_background_images';
  info: {
    displayName: 'BackgroundImage';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'ButtonLink';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-section': BlocksAboutSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.product-section': BlocksProductSection;
      'blocks.simple': BlocksSimple;
      'elements.background-image': ElementsBackgroundImage;
      'elements.button-link': ElementsButtonLink;
      'shared.seo': SharedSeo;
    }
  }
}
