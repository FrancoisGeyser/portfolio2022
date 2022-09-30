import React from 'react'
import { MoreComponent } from './MoreComponent'

export function Extras() {
  return (
    <>
      <MoreComponent label="SEO" startOpen>
        Add or improve the information that search engines use to show your site
        in search results
      </MoreComponent>
      <MoreComponent label="Analytics">
        Track user activity and click on your site to improve your convertion
        rate
      </MoreComponent>
      <MoreComponent label="CRM Integration">
        Integrate your CRM to ensure you don't loose track of customers
      </MoreComponent>
      <MoreComponent label="Web Service Integration">
        Integrate services like email providers or Chat to ensure your customers
        can interact with you as quickly and easily as possible
      </MoreComponent>
      <MoreComponent label="Payment Gateway Integration">
        Integrate your payment provider so that you can take payments right on
        your site
      </MoreComponent>
    </>
  )
}
