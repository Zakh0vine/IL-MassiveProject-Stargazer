const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:4923/api/v1/watu");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data :", error);
    throw error;
  }
};

export default fetchData;
