import Common "common";

module {
  public type OrderStatus = {
    #Pending;
    #Ready;
    #Delivered;
  };

  public type OrderType = {
    #Digital;
    #Print;
    #Custom;
  };

  public type Order = {
    id : Common.OrderId;
    customerName : Text;
    phoneNumber : Text;
    orderType : OrderType;
    quantity : Nat;
    price : Float;
    dueDate : Text; // ISO date string e.g. "2024-12-31"
    notes : Text;
    status : OrderStatus;
    isPaid : Bool;
    createdAt : Common.Timestamp;
  };

  public type AddOrderArgs = {
    customerName : Text;
    phoneNumber : Text;
    orderType : OrderType;
    quantity : Nat;
    price : Float;
    dueDate : Text;
    notes : Text;
  };

  public type UpdateOrderArgs = {
    id : Common.OrderId;
    customerName : Text;
    phoneNumber : Text;
    orderType : OrderType;
    quantity : Nat;
    price : Float;
    dueDate : Text;
    notes : Text;
    status : OrderStatus;
    isPaid : Bool;
  };

  public type DailyRevenueResult = {
    date : Text;
    revenue : Float;
    ordersCount : Nat;
  };

  public type MonthlyRevenueResult = {
    year : Nat;
    month : Nat;
    revenue : Float;
    ordersCount : Nat;
  };

  public type PendingPaymentsInfo = {
    totalUnpaidOrders : Nat;
    totalUnpaidAmount : Float;
  };
};
