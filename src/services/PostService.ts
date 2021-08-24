import { httpClient } from "../config/axiosConfig";
import {api} from "../config/apiSettings";

const getAll = async () => {
  return await httpClient.get(api.endpoint.getAll);
};

const PostService = {
  getAll
};

export default PostService;
