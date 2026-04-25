import Debug "mo:core/Debug";
import List "mo:core/List";
import Common "../types/common";
import QT "../types/quotations";
import OT "../types/orders";

mixin (
  quotations : List.List<QT.Quotation>,
  qState : Common.QuotationsState,
  orders : List.List<OT.Order>,
  oState : Common.OrdersState,
) {
  public func addQuotation(args : QT.AddQuotationArgs) : async QT.Quotation {
    Debug.todo()
  };

  public func deleteQuotation(id : Common.QuotationId) : async Bool {
    Debug.todo()
  };

  public query func getQuotations() : async [QT.Quotation] {
    Debug.todo()
  };

  public func convertQuotationToOrder(
    quotationId : Common.QuotationId,
    dueDate : Text,
    notes : Text,
  ) : async ?OT.Order {
    Debug.todo()
  };
};
