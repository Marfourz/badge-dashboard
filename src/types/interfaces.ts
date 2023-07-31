


export type PrimaryKey = string | null | undefined;


interface Commun{
  id : string | number
}



export interface IUser extends Commun {
  lastname: string;
  firstName: string;
  matricule: string,
  birthdate: Date,
  birthplace?: string,
  bloodType?: string,
  grade? :string,
  pvNumber? :string,
  printingDate?: Date,
  image?: string
}
