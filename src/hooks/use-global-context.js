import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function useGlobalContext() {
  return useContext(GlobalContext)
}