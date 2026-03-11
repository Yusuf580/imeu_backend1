import type { Schema, Struct } from '@strapi/strapi';

export interface AboutusImpact extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_impacts';
  info: {
    displayName: 'impact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutusMissions extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_missions';
  info: {
    displayName: 'missions';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutusProducts extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    bullet: Schema.Attribute.Component<'common.bullet-point', true>;
    prod_icon: Schema.Attribute.String & Schema.Attribute.Required;
    prod_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutusTheme extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_themes';
  info: {
    displayName: 'Theme';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    theme: Schema.Attribute.Component<'aboutus.products', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    theme_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApplicationAsked extends Struct.ComponentSchema {
  collectionName: 'components_application_askeds';
  info: {
    displayName: 'Asked';
  };
  attributes: {
    frequent_questions: Schema.Attribute.Component<
      'application.questions',
      true
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    label_icon: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApplicationBulletapplication extends Struct.ComponentSchema {
  collectionName: 'components_application_bulletapplications';
  info: {
    displayName: 'bulletapplication';
  };
  attributes: {
    EndDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    StartDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
  };
}

export interface ApplicationCriteria extends Struct.ComponentSchema {
  collectionName: 'components_application_criteria';
  info: {
    displayName: 'Criteria';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'application.elig-bullets', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    label_icon: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApplicationEligBullets extends Struct.ComponentSchema {
  collectionName: 'components_application_elig_bullets';
  info: {
    displayName: 'elig_bullets';
  };
  attributes: {
    icon_descriptions: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApplicationProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_application_process_steps';
  info: {
    displayName: 'ProcessSteps';
  };
  attributes: {
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    link_text: Schema.Attribute.String;
    link_url: Schema.Attribute.String;
    process_title: Schema.Attribute.String & Schema.Attribute.Required;
    step_number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApplicationQrcode extends Struct.ComponentSchema {
  collectionName: 'components_application_qrcodes';
  info: {
    displayName: 'qrcode';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    qrcode: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApplicationQuestions extends Struct.ComponentSchema {
  collectionName: 'components_application_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    answer: Schema.Attribute.String & Schema.Attribute.Required;
    dropdown_icon: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonBottomFooter extends Struct.ComponentSchema {
  collectionName: 'components_common_bottom_footers';
  info: {
    displayName: 'bottom_footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    policy: Schema.Attribute.String;
    policy_link: Schema.Attribute.String;
    terms_link: Schema.Attribute.String;
    terms_of_service: Schema.Attribute.String;
  };
}

export interface CommonBulletFunding extends Struct.ComponentSchema {
  collectionName: 'components_common_bullet_fundings';
  info: {
    displayName: 'bullet_funding';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'common.bullet-point', true>;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    Learn_btn: Schema.Attribute.String;
    learn_btn_link: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface CommonBulletPoint extends Struct.ComponentSchema {
  collectionName: 'components_common_bullet_points';
  info: {
    displayName: 'BulletPoint';
  };
  attributes: {
    icon_name: Schema.Attribute.String;
    point: Schema.Attribute.Text;
  };
}

export interface CommonContact extends Struct.ComponentSchema {
  collectionName: 'components_common_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    report_issue: Schema.Attribute.String;
    report_link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonDocs extends Struct.ComponentSchema {
  collectionName: 'components_common_docs';
  info: {
    displayName: 'docs';
  };
  attributes: {
    doc_icon: Schema.Attribute.String;
    doc_upload: Schema.Attribute.Media<'files', true>;
  };
}

export interface ContactOffices extends Struct.ComponentSchema {
  collectionName: 'components_contact_offices';
  info: {
    displayName: 'Offices';
  };
  attributes: {
    address_name: Schema.Attribute.String;
    icon_name: Schema.Attribute.String;
    location: Schema.Attribute.String;
    offices: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterContactus extends Struct.ComponentSchema {
  collectionName: 'components_footer_contactuses';
  info: {
    displayName: 'contactus';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFollow extends Struct.ComponentSchema {
  collectionName: 'components_footer_follows';
  info: {
    displayName: 'follow';
  };
  attributes: {
    icon_link: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FundingApply extends Struct.ComponentSchema {
  collectionName: 'components_funding_applies';
  info: {
    displayName: 'Apply';
  };
  attributes: {
    apply_btn_link: Schema.Attribute.String & Schema.Attribute.Required;
    apply_button: Schema.Attribute.String & Schema.Attribute.Required;
    icon_apply_name: Schema.Attribute.String;
    main_description: Schema.Attribute.Text & Schema.Attribute.Required;
    main_title: Schema.Attribute.String & Schema.Attribute.Required;
    sub_title: Schema.Attribute.String & Schema.Attribute.Required;
    subsection_descrip: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface FundingDownload extends Struct.ComponentSchema {
  collectionName: 'components_funding_downloads';
  info: {
    displayName: 'download';
  };
  attributes: {
    docs: Schema.Attribute.Component<'common.docs', true>;
    download_title: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String;
  };
}

export interface FundingListitems extends Struct.ComponentSchema {
  collectionName: 'components_funding_listitems';
  info: {
    displayName: 'Listitems';
  };
  attributes: {
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    label_descrip: Schema.Attribute.String;
  };
}

export interface FundingMechanisms extends Struct.ComponentSchema {
  collectionName: 'components_funding_mechanisms';
  info: {
    displayName: 'Mechanisms';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    mechanisms: Schema.Attribute.Component<'common.bullet-funding', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_cards';
  info: {
    displayName: 'FeatureCard';
  };
  attributes: {
    bullet_points: Schema.Attribute.Component<'common.bullet-point', true>;
    description: Schema.Attribute.String;
    icon_name: Schema.Attribute.String;
    learn_more: Schema.Attribute.String;
    learn_more_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageLastsection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_lastsections';
  info: {
    displayName: 'lastsection';
  };
  attributes: {
    btn1: Schema.Attribute.String & Schema.Attribute.Required;
    btn1_link: Schema.Attribute.String & Schema.Attribute.Required;
    btn2: Schema.Attribute.String & Schema.Attribute.Required;
    btn2_link: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageMapCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_map_cards';
  info: {
    displayName: 'MapCard';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationFooteritems extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footeritems';
  info: {
    displayName: 'Footeritems';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    label_icon: Schema.Attribute.String;
    label_link: Schema.Attribute.String;
  };
}

export interface NavigationNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'NavItem';
  };
  attributes: {
    icon_name: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerDonor extends Struct.ComponentSchema {
  collectionName: 'components_partner_donors';
  info: {
    displayName: 'donor';
  };
  attributes: {
    donor_description: Schema.Attribute.Text & Schema.Attribute.Required;
    donor_image: Schema.Attribute.Media<'images'>;
    donor_title: Schema.Attribute.String;
  };
}

export interface PartnerPartners extends Struct.ComponentSchema {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    learn_icon: Schema.Attribute.String;
    learn_label: Schema.Attribute.String & Schema.Attribute.Required;
    learn_link: Schema.Attribute.String & Schema.Attribute.Required;
    partner_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    partner_title: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutus.impact': AboutusImpact;
      'aboutus.missions': AboutusMissions;
      'aboutus.products': AboutusProducts;
      'aboutus.theme': AboutusTheme;
      'application.asked': ApplicationAsked;
      'application.bulletapplication': ApplicationBulletapplication;
      'application.criteria': ApplicationCriteria;
      'application.elig-bullets': ApplicationEligBullets;
      'application.process-steps': ApplicationProcessSteps;
      'application.qrcode': ApplicationQrcode;
      'application.questions': ApplicationQuestions;
      'common.bottom-footer': CommonBottomFooter;
      'common.bullet-funding': CommonBulletFunding;
      'common.bullet-point': CommonBulletPoint;
      'common.contact': CommonContact;
      'common.docs': CommonDocs;
      'contact.offices': ContactOffices;
      'footer.contactus': FooterContactus;
      'footer.follow': FooterFollow;
      'funding.apply': FundingApply;
      'funding.download': FundingDownload;
      'funding.listitems': FundingListitems;
      'funding.mechanisms': FundingMechanisms;
      'homepage.feature-card': HomepageFeatureCard;
      'homepage.lastsection': HomepageLastsection;
      'homepage.map-card': HomepageMapCard;
      'navigation.footeritems': NavigationFooteritems;
      'navigation.nav-item': NavigationNavItem;
      'partner.donor': PartnerDonor;
      'partner.partners': PartnerPartners;
    }
  }
}
