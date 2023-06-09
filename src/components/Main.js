import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../routes/router";
import { authStateChangeUser } from "../redux/auth/authOperations";

export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
