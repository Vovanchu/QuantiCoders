export interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  companyLogo?: File | null;
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  address: string;
  postIndex: string;

  helpType: number;
  paymentMethod: number;

  cardNumber: string[];
  expiryDate: string;
  cvv: string;

  helpSubType: number | null;
}

export interface FormProps {
  formData: FormData;
  updateField: (
    name: keyof FormData,
    value: string | number | File | null
  ) => void;
}
