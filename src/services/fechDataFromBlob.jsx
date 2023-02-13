import axios from "axios";

const FetchDataFromBlob = async () => {
  try {
    const response = await axios.get(
      "https://personalwebappeasa.blob.core.windows.net/jobs/jobs.js"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default FetchDataFromBlob;
