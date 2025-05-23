const useTrack = () => {
  try {
    const track = async (trackingNumber) => {
      const responce = await fetch(
        "https://track-cart-backend.onrender.com/api/track",
        {
          //it was previously "http://localhost:5000/api/track" now; changed due to render
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ trackingNumber: trackingNumber }),
        }
      );
      if (responce.error) {
        throw new Error(responce.error);
      }
      const data = await responce.json();
      if (!data) {
        throw new Error("There is no data");
      }
      //setting the localstorage
      localStorage.setItem("trackingData", JSON.stringify(data));
      return data;
    };

    return { track };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default useTrack;
