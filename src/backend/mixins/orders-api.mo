import Debug "mo:core/Debug";
import List "mo:core/List";
import Common "../types/common";
import T "../types/orders";

mixin (
  orders : List.List<T.Order>,
  state : Common.OrdersState,
) {
  public func addOrder(args : T.AddOrderArgs) : async T.Order {
    Debug.todo()
  };

  public func updateOrder(args : T.UpdateOrderArgs) : async Bool {
    Debug.todo()
  };

  public func deleteOrder(id : Common.OrderId) : async Bool {
    Debug.todo()
  };

  public query func getOrders() : async [T.Order] {
    Debug.todo()
  };

  public query func getOrder(id : Common.OrderId) : async ?T.Order {
    Debug.todo()
  };

  public func updateOrderStatus(id : Common.OrderId, newStatus : T.OrderStatus) : async Bool {
    Debug.todo()
  };

  public query func getDailyRevenue(date : Text) : async T.DailyRevenueResult {
    Debug.todo()
  };

  public query func getMonthlyRevenue(year : Nat, month : Nat) : async T.MonthlyRevenueResult {
    Debug.todo()
  };

  public query func getOrdersCompletedCount() : async Nat {
    Debug.todo()
  };

  public query func getPendingPaymentsInfo() : async T.PendingPaymentsInfo {
    Debug.todo()
  };
};
