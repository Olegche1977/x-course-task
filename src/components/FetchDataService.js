export default class FetchDataService {
  static async GetData() {
    const responce = await fetch(
      "https://courses.prometheus.org.ua/assets/courseware/v1/2c108355bb16192430fcee1e56a3887d/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block/books.json"
    )
      .then((res) => res.json())
      .then((data) => data["books"])
      .catch((error) => {
        alert("Something went wrong");
        throw "Error with recieving data";
      });

    return responce;
  }
}
