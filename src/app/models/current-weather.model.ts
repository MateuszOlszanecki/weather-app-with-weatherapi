// This interface is used in the getCurrentWeather() function in the API service.
// It helps to show what data comes from the API and gives code suggestions while writing.
export interface CurrentWeather {
  current: {
    condition: {
      icon: string;
      text: string;
      code: number;
    };
    temp_c: number;
    feelslike_c: number;
  };
}
