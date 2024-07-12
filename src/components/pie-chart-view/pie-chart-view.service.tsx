import ApiService from "../../api.service";

const Service = new ApiService();

export default class PieChartViewService {
  async getData() {
    return await Service.fetchNumberOfCovid19CallCenter();
  }
}
