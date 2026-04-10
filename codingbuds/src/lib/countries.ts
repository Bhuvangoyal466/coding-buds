export type CountryOption = {
  name: string;
  dialCode: string;
  code: string;
  flag: string;
};

export const countries: CountryOption[] = [
  { name: "India", dialCode: "+91", code: "IN", flag: "https://flagcdn.com/w20/in.png" },
  { name: "United States", dialCode: "+1", code: "US", flag: "https://flagcdn.com/w20/us.png" },
  { name: "United Kingdom", dialCode: "+44", code: "GB", flag: "https://flagcdn.com/w20/gb.png" },
  { name: "Canada", dialCode: "+1", code: "CA", flag: "https://flagcdn.com/w20/ca.png" },
  { name: "Australia", dialCode: "+61", code: "AU", flag: "https://flagcdn.com/w20/au.png" },
  { name: "United Arab Emirates", dialCode: "+971", code: "AE", flag: "https://flagcdn.com/w20/ae.png" },
  { name: "Singapore", dialCode: "+65", code: "SG", flag: "https://flagcdn.com/w20/sg.png" },
  { name: "Malaysia", dialCode: "+60", code: "MY", flag: "https://flagcdn.com/w20/my.png" },
  { name: "New Zealand", dialCode: "+64", code: "NZ", flag: "https://flagcdn.com/w20/nz.png" },
  { name: "South Africa", dialCode: "+27", code: "ZA", flag: "https://flagcdn.com/w20/za.png" },
  { name: "Germany", dialCode: "+49", code: "DE", flag: "https://flagcdn.com/w20/de.png" },
  { name: "France", dialCode: "+33", code: "FR", flag: "https://flagcdn.com/w20/fr.png" },
];