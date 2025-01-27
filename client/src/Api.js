import axios from "axios";

const APIURL = `https://muni-leims.herokuapp.com`;
// const APIURL = `http://localhost:3000`;
const id = () => localStorage.getItem("user");
export async function getLowestSwitchboard() {
  const res = await fetch(`${APIURL}/switchboards/lowest/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}
export async function getHighestSwitchboard() {
  const res = await fetch(`${APIURL}/switchboards/highest/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getTopFiveSwitchboards() {
  const res = await fetch(`${APIURL}/switchboards/top5/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getLastFiveSwitchboards() {
  const res = await fetch(`${APIURL}/switchboards/last5/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getSwitchboardsData() {
  const res = await fetch(`${APIURL}/switchboards/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function TypeOffice() {
  try {
    const res = await axios({
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      url: `${APIURL}/offices/type/${id()}`,
    });

    return res.data[0].res;
  } catch (error) {
    return error;
  }
}

export async function officebyId(idUser) {
  try {
    const res = await axios({
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      url: `${APIURL}/offices/${idUser}`,
    });

    return res.data[0];
  } catch (error) {
    return error;
  }
}

export async function getMunicipalitiesAvgData() {
  const res = await fetch(`${APIURL}/municipalities`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getLowestMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/lowest`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getHighestMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/highest`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getTopFiveMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/top5`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getLastFiveMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/last5`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

// Get the let and lng location
export async function getAllSwLocation() {
  const res = await fetch(`${APIURL}/switchboards/location/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getAllSwEnergyIntensity() {
  const res = await fetch(`${APIURL}/switchboards/location/energyintensity`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function getSwEnergyIntensity() {
  const res = await fetch(
    `${APIURL}/switchboards/location/energyintensity/${id()}`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: localStorage.getItem("token"),
      }),
    }
  );
  const json = await res.json();
  return json;
}
export async function setEnergyIntesityImage(enertyIntensity, fileName) {
  try {
    const res = await axios({
      method: "post",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      url: `${APIURL}/images/energyintensity`,
      data: { enertyIntensity, fileName },
    });
    if (res.data) {
      return;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export async function updateSwitchboards(data) {
  try {
    const res = await axios({
      method: "put",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      url: `${APIURL}/switchboards`,
      data,
    });
    if (res.data) {
      // eslint-disable-next-line no-console
      console.log(res.data);
      return;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
export async function insertSwitchboards(data) {
  try {
    const res = await axios({
      method: "post",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      url: `${APIURL}/switchboards`,
      data,
    });
    if (res.data) {
      // eslint-disable-next-line no-console
      console.log(res.data);
      return;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
export async function getImagesName() {
  const res = await fetch(`${APIURL}/images/imagesname/${id()}`, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem("token"),
    }),
  });
  const json = await res.json();
  return json;
}

export async function disactiveStatisticalReport(data) {
  const res = await axios({
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    method: "patch",
    url: `${APIURL}/images/disactive`,
    data,
  });
  const json = await res;
  return json;
}

export async function activeStatisticalReport(data) {
  const res = await axios({
    method: "patch",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    url: `${APIURL}/images/active/`,
    data,
  });
  const json = await res.json();
  return json;
}
