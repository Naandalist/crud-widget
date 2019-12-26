import Axios from "axios";

const baseUrl = `https://test.kewirus.com/api/widgets`;

export const getDataWidgets = async () => {
  try {
    const result = await Axios.get(`${baseUrl}`);
    return result.data;
  } catch (err) {
    return console.log("ERROR GET DATA WIDGETS: ", err);
  }
};

export const getSelectedWidgets = async slug => {
  try {
    console.log("slug dah nyampe di get selected", slug);
    const result = await Axios.get(`${baseUrl}/${slug}`);
    return result.data;
  } catch (err) {
    return console.log("ERROR GET DATA WIDGETS: ", err);
  }
};

export const postDataWidgets = async data => {
  try {
    console.log("isi datanya adalah: ", data);
    const result = await Axios.post(`${baseUrl}`, {
      name: data.widgetName,
      price: Number(data.price),
      description: data.description
    });
    return result;
  } catch (err) {
    return console.log("ERROR GET DATA WIDGETS: ", err);
  }
};

export const editDataWidgets = async (data, id) => {
  try {
    console.log("isi datanya di PUT adalah: ", data);
    console.log("isi id nya di PUT adalah: ", id);
    const result = await Axios.put(`${baseUrl}/${id}`, {
      name: data.name,
      price: Number(data.price),
      description: data.description
    });
    return result;
  } catch (err) {
    return console.log("ERROR GET DATA WIDGETS: ", err);
  }
};

export const deleteDataWidgets = async id => {
  try {
    console.log("isi datanya adalah: ", id);
    const result = await Axios.delete(`${baseUrl}/${id}`);
    return result;
  } catch (err) {
    return console.log("ERROR GET DATA WIDGETS: ", err);
  }
};
