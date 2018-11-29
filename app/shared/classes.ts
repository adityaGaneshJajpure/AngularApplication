import { Attendence } from "./attendence";
import { Students } from "./students";
export interface Classes{
    name : string;
    students : Students[];
    attendence : Attendence[];
}