import instance from "../axios";

const getMsg = async () => {
  return await instance({
    method: "post",
    url: "rand.qinghua?format=json",
  });
};

export default getMsg;
