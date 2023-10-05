import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
import ACTION_TYPES from "./typesAction";
import Error from "../Error";
import Spinner from "../Spinner";
import {getChatJSON} from "../../api/index"

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
    isFetching: false,
  });
  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.DATA_IS_FETCHING, 

    })///від папки білд(в корені пабліка)
  getChatJSON()
    .then((data) =>
      dispatch({
        type: ACTION_TYPES.DATA_SUCCESS, //тип дії
        payload: data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ACTION_TYPES.DATA_ERROR, //тип дії
        payload: err,
      })
    );
  }, []);
  if (state.error) {
    return <Error />
  }
  return (
    <section>
      <h2>Chat</h2>
      {state.isFetching && <Spinner />}
      {
        state.messages.map((msg) => (<article key={msg.id}>
          <h3>{msg.body}</h3>
          <p>{msg.author.name}</p>
        </article>))
      }
    </section>
  );
};

export default Chat;