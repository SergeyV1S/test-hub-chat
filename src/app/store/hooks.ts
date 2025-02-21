import { useDispatch, useSelector } from "react-redux";

import type { TAppDispatch, TRootState } from "./types";

export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
export const useAppSelector = useSelector.withTypes<TRootState>();
