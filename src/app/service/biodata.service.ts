import { Injectable } from '@angular/core'; 
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor(private http:HttpClient ) { }

  //get user
  getData():Observable<any>
  {
    return this.http.get('http://localhost:3000/users');
  }

  //create user
  createData(data:any):Observable<any>
  {
    return this.http.post('http://localhost:3000/users',data)
  }
  //delte
  deleteData(id:any):Observable<any>
  {
    return this.http.delete('http://localhost:3000/users/'+id)
  }

  //for update page user
  getUserServiceList(id:any):Observable<any>
  {
    return this.http.get('http://localhost:3000/users/'+id)
  }

  //update user
  updateUsers(id:any,params:any)
  {
    return this.http.put('http://localhost:3000/users/'+id,params);
  }

 
}
