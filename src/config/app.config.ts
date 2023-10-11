interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer Service Representative'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Business Owner',
    'Outlet Manager',
    'Sales Associate',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Organization',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read organization information',
    'Read outlet information',
    'Read rental information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage organization information',
    'Manage outlet information',
    'Manage tool information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b658ecc3-18fe-41e7-b536-18a955c078ff',
};
