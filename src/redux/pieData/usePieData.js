import {  useSelector } from "react-redux";

export  function usePieData() {
   return  useSelector(state => state.pieData)
}