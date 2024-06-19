import axiosRequest from "@/lib/axiosRequest";

const postForm = async (states, endpoint) => {
  try {
    const formData = new FormData();
    Object.keys(states)?.forEach((stateKey) => {
      formData.append(stateKey, states[stateKey]);
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/!/forms/${endpoint}`,
      //   url: `https://barakah.brackets-tech.com/!/forms/career_form`,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      data: formData,
      timeout: 15000
    };

    const data = await axiosRequest(config);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postForm;
