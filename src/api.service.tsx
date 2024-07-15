import { callCenterUrlParams } from "./interfaces/callCenterUrlParams.interface";
import Covid19CallCenterInterface from "./interfaces/covid19CallCenterNumber.interface";

interface NumberOfCovid19CallCenter {
  data: Covid19CallCenterInterface[];
  error?: string;
}

interface fromServerDataWithJapanese {
  都道府県名: string;
  全国地方公共団体コード: number;
  受付_年月日: string;
  相談件数: number;
  曜日: string;
}

export default class ApiService {
  private BASE_URL = "https://api.data.metro.tokyo.lg.jp/v1";

  dataMapperForCovid19CallCenterInterface = (
    data: [][]
  ): Covid19CallCenterInterface[] => {
    if (data && data.length > 1) {
      const callCenterJapaneseData: fromServerDataWithJapanese[] =
        data[0] ?? [];

      return callCenterJapaneseData.map((item) => ({
        prefectureName: item["都道府県名"],
        nationwideLocalGovernmentCode: item["全国地方公共団体コード"],
        publicationDate: item["受付_年月日"],
        callCenterCount: item["相談件数"],
        confirmationDate: item["曜日"],
      }));
    }

    return [];
  };

  fetchNumberOfCovid19CallCenter = async (
    params: callCenterUrlParams
  ): Promise<NumberOfCovid19CallCenter> => {
    const endpoint = "Covid19CallCenter";
    const url = new URL(`${this.BASE_URL}/${endpoint}`);
    const { from, till, limit, cursor } = params;

    url.searchParams.append("from", String(from));
    url.searchParams.append("till", String(till));
    url.searchParams.append("limit", String(limit));

    if (cursor) {
      url.searchParams.append("cursor", cursor);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network Error! HTTP error status: ${response.status}`);
      }

      const fromServerdata: [] = await response.json();
      const afterMapper =
        this.dataMapperForCovid19CallCenterInterface(fromServerdata);

      return { data: afterMapper };
    } catch (error: any) {
      return { data: [], error: error.message };
    }
  };
}
