import {
  getCommentsThunk,
  createCommentThunk,
  reactCommentThunk,
  unReactCommentThunk,
} from "@/store/comment/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const useComment = () => {
  const dispatch = useAppDispatch();

  const handleGetComments = useCallback(
    (pkBook = null) => dispatch(getCommentsThunk(pkBook)).unwrap(),
    [dispatch]
  );

  const handleCreateComment = (data) => dispatch(createCommentThunk(data));

  const handleReactComment = (data) => dispatch(reactCommentThunk(data));
  const handleUnReactComment = (pkReact) => dispatch(unReactCommentThunk(pkReact));

  return {
    handleGetComments,
    handleCreateComment,
    handleReactComment,
    handleUnReactComment
  };
};
