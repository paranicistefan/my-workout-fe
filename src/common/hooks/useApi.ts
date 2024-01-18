import {
  UseQueryOptions,
  useQuery,
  UseMutationOptions,
  useMutation,
} from "react-query";
import { apiClient } from "../utils/http";

export const postResource = async <PostBody, PostResponse>(
  path: string,
  body: PostBody
): Promise<PostResponse> => {
  const { data } = await apiClient.post(path, body);
  return data as PostResponse;
};

export const getResource = async <GetResponse>(
  path: string
): Promise<GetResponse> => {
  const { data } = await apiClient.get(path);
  return data as GetResponse;
};

export const useGetResource = <GetResponse>(
  path: string,
  config: UseQueryOptions<GetResponse, unknown, GetResponse, string[]> = {}
) => {
  const { data, isLoading, error, refetch } = useQuery<
    GetResponse,
    unknown,
    GetResponse,
    string[]
  >([path], () => getResource<GetResponse>(path), { ...config });

  return { data, isLoading, error, refetch };
};
export const usePostResource = <PostBody, PostResponse>(
  path: string,
  config: UseMutationOptions<PostResponse, unknown, PostBody, unknown[]> = {}
) => {
  const { mutate, isLoading } = useMutation<
    PostResponse,
    unknown,
    PostBody,
    unknown[]
  >((body) => postResource<PostBody, PostResponse>(path, body), { ...config });

  return { mutate, isLoading };
};

export const putResource = async <PutBody, PutResponse>(
  path: string,
  body: PutBody
): Promise<PutResponse> => {
  const { data } = await apiClient.put(path, body);
  return data as PutResponse;
};

export const usePutResource = <PutBody, PutResponse>(
  path: string,
  config: UseMutationOptions<PutResponse, unknown, PutBody, unknown[]> = {}
) => {
  const { mutate, isLoading } = useMutation<
    PutResponse,
    unknown,
    PutBody,
    unknown[]
  >((body) => putResource<PutBody, PutResponse>(path, body), { ...config });

  return { mutate, isLoading };
};

export const deleteResource = async <DeleteResponse>(
  path: string
): Promise<DeleteResponse> => {
  const { data } = await apiClient.delete(path);
  return data as DeleteResponse;
};

export const useDeleteResource = <DeleteResponse>(
  path: string,
  config: UseMutationOptions<unknown, unknown, unknown, unknown[]> = {}
) => {
  const { mutate, isLoading } = useMutation<
    DeleteResponse,
    unknown,
    DeleteResponse,
    unknown[]
  >(() => deleteResource<DeleteResponse>(path), { ...config });

  return { mutate, isLoading };
};
