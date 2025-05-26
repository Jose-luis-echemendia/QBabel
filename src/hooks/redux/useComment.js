import { getCommentsThunk, createCommentThunk } from "@/store/comment/thunks";
import { useAppDispatch } from "./useStore";

export const useComment = () => {
  const dispatch = useAppDispatch();

  const handleGetComments = () => dispatch(getCommentsThunk());

  const handleCreateComment = (data) => dispatch(createCommentThunk(data));

  return {
    handleGetComments,
    handleCreateComment,
  };
};
