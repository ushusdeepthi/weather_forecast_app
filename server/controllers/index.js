import fetch from "node-fetch";
import moment from "moment";

export const getAllData = async (req, res) => {
  try {
    const url =
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.069/lat/59.3226/data.json";
    const response = await fetch(url);
    const { timeSeries } = await response.json();
    const valid_time = timeSeries.map((time) => time.validTime);
    // const final_data = timeSeries.map((item) => {
    //   const time = item.validTime;
    //   const data = item.parameters.map((parameter) => {
    //     return {
    //       name: parameter.name,
    //       value: parameter.values[0],
    //       unit: parameter.unit,
    //     };
    //   });
    //   return { time, data };
    // });
    // console.log(final_data);
    const answer = {};
    const final_data = timeSeries.map((item) => {
      const time = item.validTime;
      const data = item.parameters.map((parameter) => {
        return (answer[parameter.name] = {
          value: parameter.values[0],
          unit: parameter.unit,
        });
      });
      return { time, ...answer };
    });
    res.status(200).json(final_data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleData = async (req, res) => {
  try {
    const date = req.params.date;
    console.log("this is the params date", date);
    const url =
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.069/lat/59.3226/data.json";
    const response = await fetch(url);
    const { timeSeries } = await response.json();

    //  const valid_time = timeSeries.map((time) => time.validTime);
    //  const a={}
    //  for(i=0;i<=timeSeries.length-1;i++){

    //  }
    const required_date_data = timeSeries.filter((item) =>
      moment.utc(date).isSame(item.validTime, "day")
    );
    const answer = {};
    let temp = [];
    const final_data = required_date_data.map((item) => {
      const time = item.validTime;
      const data = item.parameters.map((parameter) => {
        if (parameter.name === "t") {
          temp.push(parameter.values[0]);
        }
        return (answer[parameter.name] = {
          value: parameter.values[0],
          unit: parameter.unit,
        });
      });
      return { time, ...answer };
    });
    console.log(temp);
    temp.sort();
    const min_temp = temp[0];
    const max_temp = temp[temp.length - 1];

    console.log(temp);
    console.log(max_temp);
    console.log(min_temp);

    // const temp = final_data.console.log(today);
    res.status(200).json(final_data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
