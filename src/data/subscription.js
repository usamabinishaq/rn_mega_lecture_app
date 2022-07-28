import {
  SUBSCRIPTION_Basic,
  SUBSCRIPTION_Premium,
  SUBSCRIPTION_Professional,
  SUBSCRIPTION_Starter,
} from '../constants/constants';

import variables from '../utils/utils';

export const SubscriptionData = [
  {
    id: 1,
    title: 'Starter',
    subscriptionLogo: SUBSCRIPTION_Starter,
    month: '1 Months',
    padiChecking: '10 Papers Paid Checking',
    price: '1000',
    color: variables.colorGreen,
  },
  {
    id: 2,
    title: 'Basic',
    subscriptionLogo: SUBSCRIPTION_Basic,
    month: '3 Months',
    padiChecking: '20 Papers Paid Checking',
    price: '1500',
    color: variables.colorRed,
  },
  {
    id: 3,
    title: 'Professional',
    subscriptionLogo: SUBSCRIPTION_Professional,
    month: '6 Months',
    padiChecking: '100 Papers Paid Checking',
    price: '3000',
    color: variables.colorYellow,
  },
  {
    id: 4,
    title: 'Premium',
    subscriptionLogo: SUBSCRIPTION_Premium,
    month: '1 Year',
    padiChecking: 'Unlimited Paid Checking',
    price: '5000',
    color: variables.colorBlue,
  },
];
