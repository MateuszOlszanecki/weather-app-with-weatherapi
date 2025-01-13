interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      icon: string;
      text: string;
      code: number;
    };
  };
}

// This interface is used in the getWeather() function in the API service.
// It helps to show what data comes from the API and gives code suggestions while writing.
export interface Weather {
  current: {
    condition: {
      icon: string;
      text: string;
      code: number;
    };
    temp_c: number;
  };
  forecast: { forecastday: ForecastDay[] };
  location: {
    localtime: string;
    name: string;
  };
}
