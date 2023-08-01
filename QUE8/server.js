(async () => {
    try {
      const response = await fetch("https://www.google.com/");
      const text = await response.text();
      console.log(response);
    } catch (error) {
      console.log(error.response.body);
    }
  })();