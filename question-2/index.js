const resolvedPromise = () => {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let success = { message: "delayed success!" };
      console.log(success);
    }, 500);
    resolve();
  });

  promise.then(
    function (value) {
      //   console.log(value);
    },
    function (error) {
      console.log(error);
    }
  );
};

const rejectedPromise = () => {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      try {
        throw new Error("error: delayed exception!");
      } catch (e) {
        console.error(e);
      }
    }, 500);
    resolve();
  });

  promise.then(
    function (value) {
      //   console.log(value);
    },
    function (error) {
      console.log(error);
    }
  );
};

resolvedPromise();
rejectedPromise();
