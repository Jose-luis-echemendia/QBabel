import { getCommentsThunk, createCommentThunk } from "@/store/comment/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const useComment = () => {
  const dispatch = useAppDispatch();

  const handleGetComments = useCallback(
    (pkBook = null) => dispatch(getCommentsThunk(pkBook)).unwrap(),
    [dispatch]
  );

  const handleCreateComment = (data) => dispatch(createCommentThunk(data));

  return {
    handleGetComments,
    handleCreateComment,
  };
};
