import ApiService from "../../api.service";

const Service = new ApiService();

export default class LineChartViewService {
  async getData() {
    return await Service.fetchNumberOfCovid19CallCenter();
  }
}
