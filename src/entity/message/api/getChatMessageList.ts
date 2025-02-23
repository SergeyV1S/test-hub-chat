import { api } from "@/shared/api/instance";
import type { IChatMessage } from "@/shared/types";

export const getChatMessageList = ({ config, queryParams }: IQuerySettings<{ chatId: string }>) =>
  api.get<IBaseResponse<IChatMessage[]>>(
    `/chat/${queryParams?.chatId}/messages?page=${queryParams?.page}`,
    config
  );
