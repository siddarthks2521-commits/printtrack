module {
  public type OrderId = Nat;
  public type QuotationId = Nat;
  public type Timestamp = Int; // nanoseconds from Time.now()

  public type OrdersState = {
    var nextOrderId : Nat;
  };

  public type QuotationsState = {
    var nextQuotationId : Nat;
  };
};
