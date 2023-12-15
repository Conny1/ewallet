export type User = {
  id?: number;
  name?: string;
  email: string;
  verified?: string;
  isadmin?: string;
  password?: string;
  number?: string;
};

export type Balance = {
  id?: number;
  userid?: number;
  useremail?: string;
  balance?: number;
  pendingid?: number;
  toid?: string;
};

export type Pending = {
  id?: number;
  userid?: number;
  amount?: number;
  pending?: boolean;
  fromid?: string;
  toid?: string;
};

export type Email = {
  id?: number;
  amount?: string;
  email?: string;
  receiveremail?: string;
};
