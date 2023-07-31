interface ICommun {
  id : number
}

export interface IResponseData {
    message?: string;
    isOk: boolean;
    data?: any;
  }



export enum FileType {
    PUBLICATION = 'PUBLICATION',
    DOCUMENT = 'DOCUMENT'
}

export interface IFile {
  name : string,
  link : string,
  type:FileType

}


export interface IUser extends ICommun{
  email: string
  firstname: string
  lastname: string
  phone : string

}

export interface IPagination {
  page: number;
  perPage: number;
  total: number;
}
