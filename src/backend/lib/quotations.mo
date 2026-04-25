import Debug "mo:core/Debug";
import List "mo:core/List";
import Common "../types/common";
import QT "../types/quotations";
import OT "../types/orders";

module {
  public func addQuotation(
    quotations : List.List<QT.Quotation>,
    nextId : Nat,
    args : QT.AddQuotationArgs,
    now : Common.Timestamp,
  ) : QT.Quotation {
    Debug.todo()
  };

  public func deleteQuotation(
    quotations : List.List<QT.Quotation>,
    id : Common.QuotationId,
  ) : Bool {
    Debug.todo()
  };

  public func getQuotation(
    quotations : List.List<QT.Quotation>,
    id : Common.QuotationId,
  ) : ?QT.Quotation {
    Debug.todo()
  };

  public func convertToOrderArgs(
    quotation : QT.Quotation,
    dueDate : Text,
    notes : Text,
  ) : OT.AddOrderArgs {
    Debug.todo()
  };
};
