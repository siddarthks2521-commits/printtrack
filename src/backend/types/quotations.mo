import Common "common";
import Orders "orders";

module {
  public type Quotation = {
    id : Common.QuotationId;
    customerName : Text;
    phoneNumber : Text;
    orderType : Orders.OrderType;
    quantity : Nat;
    unitPrice : Float;
    totalPrice : Float;
    createdAt : Common.Timestamp;
  };

  public type AddQuotationArgs = {
    customerName : Text;
    phoneNumber : Text;
    orderType : Orders.OrderType;
    quantity : Nat;
    unitPrice : Float;
  };
};
