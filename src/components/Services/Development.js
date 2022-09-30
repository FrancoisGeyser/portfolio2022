import React from 'react'
import { MoreComponent } from './MoreComponent'

export function Development() {
  return (
    <>
      <MoreComponent label="Landing Page" startOpen>
        Single page site for promotions, marketing, product launches and link
        generation
      </MoreComponent>
      <MoreComponent label="Website">
        Single or multi page. Single page scrolling, SPA / PWA or multi-page.
        Generally linked to a admin panel with dynamic content from various APIs
      </MoreComponent>
      <MoreComponent label="eCommerce">
        Full e-commerce product. Includes shopping cart, product variant
        displays and payment provider integrations. From small online shops to a
        complete online shopping experience.
      </MoreComponent>
      <MoreComponent label="Portfolio">
        Show yourself or your work to the world using a unique website that says
        "This is me!"
      </MoreComponent>
      <MoreComponent label="Blog">
        For your creative side. From technical to lifestyle blogs. Standalone or
        attached to your site. Multiple formats such as Markdown or CMS driven.
      </MoreComponent>
      <MoreComponent label="Dashboard">
        Data panel or Content management. Management panel to show data from
        your website, manage content like blog posts and products or administer
        user accounts for your site.
      </MoreComponent>
      <MoreComponent label="API">
        To use as a data source or to provide services to your site.
      </MoreComponent>
    </>
  )
}
