import { api } from "@/shared/api/instance";
import type { IModel } from "@/shared/types";

export const getModelList = ({ config }: IQuerySettings) =>
  api.get<IModel[]>(`/model/list?parentId=gpt`, config);
