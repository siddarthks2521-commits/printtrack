import Debug "mo:core/Debug";
import List "mo:core/List";
import Common "../types/common";
import T "../types/orders";

module {
  public func addOrder(
    orders : List.List<T.Order>,
    nextId : Nat,
    args : T.AddOrderArgs,
    now : Common.Timestamp,
  ) : T.Order {
    Debug.todo()
  };

  public func updateOrder(
    orders : List.List<T.Order>,
    args : T.UpdateOrderArgs,
  ) : Bool {
    Debug.todo()
  };

  public func deleteOrder(
    orders : List.List<T.Order>,
    id : Common.OrderId,
  ) : Bool {
    Debug.todo()
  };

  public func getOrder(
    orders : List.List<T.Order>,
    id : Common.OrderId,
  ) : ?T.Order {
    Debug.todo()
  };

  public func updateOrderStatus(
    orders : List.List<T.Order>,
    id : Common.OrderId,
    newStatus : T.OrderStatus,
  ) : Bool {
    Debug.todo()
  };

  public func getDailyRevenue(
    orders : List.List<T.Order>,
    date : Text,
  ) : T.DailyRevenueResult {
    Debug.todo()
  };

  public func getMonthlyRevenue(
    orders : List.List<T.Order>,
    year : Nat,
    month : Nat,
  ) : T.MonthlyRevenueResult {
    Debug.todo()
  };

  public func getOrdersCompletedCount(
    orders : List.List<T.Order>,
  ) : Nat {
    Debug.todo()
  };

  public func getPendingPaymentsInfo(
    orders : List.List<T.Order>,
  ) : T.PendingPaymentsInfo {
    Debug.todo()
  };
};
