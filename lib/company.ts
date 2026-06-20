/**
 * Single source of truth for verified company data from CAC.
 * If any of these change, update here and the rest of the site follows.
 */
export const company = {
  legalName: "Osmani Technologies Limited",
  shortName: "Osmani",
  rcNumber: "9532723",
  tin: "2623089811720",
  type: "Private company limited by shares",
  incorporated: "2026-05-09",
  incorporatedReadable: "9 May 2026",
  act: "CAMA 2020",
  status: "Active" as const,
  registeredAddress: {
    line1: "13 Obe Street",
    line2: "Bodija",
    locality: "Ibadan",
    region: "Oyo State",
    country: "Nigeria",
    countryCode: "NG",
  },
  email: {
    primary: "osmanitechnologieslimited@gmail.com",
    press: "osmanitechnologieslimited@gmail.com",
    ventures: "osmanitechnologieslimited@gmail.com",
  },
  flagship: "Chattōsales",
  flagshipUrl: "https://chattosales.com",
  description:
    "Osmani Technologies Limited is a Nigerian technology company engaged in the development, marketing, and distribution of digital software products and SaaS-based solutions, including its flagship product Chattōsales. The company also engages in the sourcing, marketing, and distribution of physical products and general merchandise across digital and physical channels.",
  url: "https://osmani.com.ng",
  cacVerifyUrl: "https://search.cac.gov.ng/home",
  stampDutyVerifyUrl: "https://stampduty.gov.ng/verification",
  stampDutyCertNo: "2026-2426-12907-93845",
} as const;

export function addressLine() {
  const a = company.registeredAddress;
  return `${a.line1}, ${a.line2}, ${a.locality}, ${a.region}, ${a.country}`;
}
