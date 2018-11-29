import {Comment } from './comment';

export interface News{
    id : number;
    name : string;
    image : string;
    comments : Comment[];
    remove : number;
}