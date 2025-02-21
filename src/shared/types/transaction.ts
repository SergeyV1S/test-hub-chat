export interface ITransaction {
  id: string;
  provider: "YOOMONEY";
  currency: "RUB";
  meta: object;
  amount: 0;
  status: "FAILED";
  type: "SUBSCRIPTION";
  plan_id: string;
  user_id: string;
  referral_id: string;
  external_id: string;
  created_at: string;
}
