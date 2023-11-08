import axios, { AxiosPromise } from "axios"
import { TurmaData } from "../interface/TurmaData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8081';

const fetchData = async (): AxiosPromise<TurmaData[]>=>{
    const response = axios.get(API_URL + '/turma');
    return response;
}
export function useTurmaData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['turma-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}