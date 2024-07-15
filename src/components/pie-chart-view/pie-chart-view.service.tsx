import ApiService from "../../api.service";
import { callCenterUrlParams } from "../../interfaces/callCenterUrlParams.interface";

const Service = new ApiService();

export default class PieChartViewService {
  async getData(params: callCenterUrlParams) {
    return await Service.fetchNumberOfCovid19CallCenter(params);
  }
}
