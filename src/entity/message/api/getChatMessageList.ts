import { api } from "@/shared/api/instance";
import type { IChatMessage } from "@/shared/types";

export const getChatMessageList = ({ config, queryParams }: IQuerySettings<{ chatUid: string }>) =>
  api.get<IBaseResponse<IChatMessage[]>>(
    `/chat/${queryParams?.chatUid}/messages?page=${queryParams?.page}`,
    config
  );
