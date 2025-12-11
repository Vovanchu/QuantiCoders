interface HelpType {
  id: number;
  name: string;
  icon: string;
  color: string;
  subTypes: { id: number; name: string }[];
}

interface PaymentMethod {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export type HelpTypes = HelpType[];
export type PaymentMethods = PaymentMethod[];
