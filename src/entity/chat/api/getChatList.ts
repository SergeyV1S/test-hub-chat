import { api } from "@/shared/api/instance";
import type { IChat } from "@/shared/types";

export const getChatList = ({ config, queryParams }: IQuerySettings) =>
  api.get<IBaseResponse<IChat[]>>(`/chat/list?page=${queryParams?.page}`, config);
