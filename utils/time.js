import Moment from "moment";

export function tsFormat(ts) {
  return Moment(ts).format("YYYY-MM-DD HH:mm:ss");
}

// import { tsFormat } from '../../../utils/time.js';
// tsFormat(operationTime)