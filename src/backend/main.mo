import List "mo:core/List";
import OT "types/orders";
import QT "types/quotations";
import Common "types/common";
import OrdersApi "mixins/orders-api";
import QuotationsApi "mixins/quotations-api";

actor {
  let orders = List.empty<OT.Order>();
  let ordersState : Common.OrdersState = { var nextOrderId = 1 };

  let quotations = List.empty<QT.Quotation>();
  let quotationsState : Common.QuotationsState = { var nextQuotationId = 1 };

  include OrdersApi(orders, ordersState);
  include QuotationsApi(quotations, quotationsState, orders, ordersState);
};
