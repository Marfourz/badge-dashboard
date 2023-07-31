import { defineStore } from "pinia";

import Api from "../api";

interface IParams {
    skip?: number;
    take?: number;
}

export const useUsersStore = defineStore('usersStore',{
    state:()=>{
        return {
            
        }
    },

    actions:{
        async create(data: any,file:File){

            try{
                const formData = new FormData()
                formData.append('firstname', data.firstname)
                formData.append('lastname', data.lastname)
                formData.append('matricule', data.matricule)
                if(data.birthdate){
                    formData.append('birthdate', (new Date(data.birthdate)).toISOString())
                    console.log("birthdate", (new Date(data.birthdate)).toISOString());
                    
                }
                if(data.birthplace)
                    formData.append('birthplace', data.birthplace)
                if(data.grade)
                    formData.append('grade', data.grade)
                if(data.pvNumber)
                    formData.append('pvNumber', data.pvNumber)
                if(data.pvDate){
                    
                    formData.append('pvDate', (new Date(data.pvDate)).toISOString() )

                }
                    
                formData.append('file', file)

                
                return await Api.post('users',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                })
            }
            catch(error){
                throw error
            }
            
        },  


        async findAll(params?:IParams ){
            try{
                const response = await Api.get("users", {
                    params : params
                })
                return response.data
            }
            catch(error : any){
                throw error
            }        
        },


        async getFile(path : string){
            try{
                const response = await Api.get("users/file", {
                    params : {
                        path
                    }
                })
                return response.data
            }
            catch(error : any){
                throw error
            }        
        },

        getFileLink(link : string){
            return `${import.meta.env.VITE_APP_FILE_API_URL}?path=${link}`
        },


    }
})