import RowData from "./RowData";
import RowHeaders from "./RowHeaders";
import CurrentClosing from "./CurrentClosing";
export default interface HomePageDashboard {
  pendingSubscriptions: number;
  completeSubscriptions: number;
  currentClosing: CurrentClosing;
  data: RowData[];
  dataHeaders: RowHeaders[];
}
