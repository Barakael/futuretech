import { site } from './site'

export const terms = {
  title: 'Terms and Conditions',
  updated: 'October 2026',
  intro: `These Terms and Conditions govern the use of the website ${site.domain} and the supply of products and services by ${site.name} (“FTE”, “we”, “us”). By accessing this website or engaging our services, you agree to these terms.`,
  sections: [
    {
      heading: '1. About us',
      body: `${site.name} is a Tanzanian company providing security systems, vehicle and container tracking, power and backup solutions, software development, and office automation. Our office is at ${site.address.line1}, ${site.address.line2}, ${site.address.city}. Contact: ${site.email}, ${site.phones.map((p) => p.label).join(' / ')}.`,
    },
    {
      heading: '2. Website use',
      body: 'Content on this website is for general information about our capabilities. It does not constitute a binding offer. We may update, correct, or remove content without notice. You agree not to misuse the site, attempt unauthorised access, or use our materials in a way that infringes our rights or applicable law.',
    },
    {
      heading: '3. Quotations and contracts',
      body: 'Prices, scopes, and timelines in quotations are valid only for the period stated (or 30 days if unspecified) and are subject to written confirmation. A binding contract is formed when both parties sign an agreement, purchase order is accepted in writing, or we issue a confirmed proforma and you accept it in writing. Specifications may change with mutual written agreement.',
    },
    {
      heading: '4. Supply, installation and commissioning',
      body: 'Delivery and installation dates are estimates unless expressly guaranteed in writing. Site readiness (power, access, civil works, permits) remains the client’s responsibility unless included in our scope. Risk in goods passes on delivery to site or collection; title passes on full payment. Commissioning and handover follow the agreed checklist and training where included.',
    },
    {
      heading: '5. Payments',
      body: 'Payment terms are as stated on invoices or contracts (commonly deposit plus progress or completion payments). Late amounts may attract interest or suspension of work after written notice. Bank details will be provided on official invoices only—verify before transferring funds.',
    },
    {
      heading: '6. Warranties and after-sales',
      body: 'Manufacturer warranties apply to genuine equipment supplied through authorised channels, subject to their terms. Workmanship warranties (if any) are as stated in the contract. Warranties exclude misuse, unauthorised modification, force majeure, and third-party damage. Annual maintenance contracts are available separately where offered.',
    },
    {
      heading: '7. Liability',
      body: 'To the fullest extent permitted by Tanzanian law, FTE is not liable for indirect, incidental, or consequential loss (including lost profits or data). Our aggregate liability under any engagement is limited to the fees paid for the specific goods or services giving rise to the claim, except where liability cannot be limited by law (including fraud or personal injury caused by negligence).',
    },
    {
      heading: '8. Intellectual property',
      body: 'Website design, text, logos, and our custom software remain our property or that of our licensors. Clients receive a licence to use deliverables as agreed in the project contract. You may not copy our branding or site content for commercial use without written permission.',
    },
    {
      heading: '9. Privacy',
      body: 'Contact details you send via forms, email, or phone are used to respond to enquiries and deliver services. We do not sell personal data. Tracking and security systems we install may process operational data under the client’s policies—clients remain responsible for lawful use of those systems.',
    },
    {
      heading: '10. Governing law',
      body: 'These terms are governed by the laws of the United Republic of Tanzania. Disputes should first be raised in good faith with us; failing resolution, courts of competent jurisdiction in Dar es Salaam shall have exclusive jurisdiction, unless otherwise agreed in a signed contract.',
    },
    {
      heading: '11. Changes',
      body: 'We may revise these Terms and Conditions from time to time. The version published on this website on the date you use the site or place an order applies, unless a signed contract states otherwise.',
    },
  ],
}
