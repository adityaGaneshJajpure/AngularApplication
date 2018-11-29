/*import { Injectable } from "@angular/core";
//import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "../shared/user.modal";
//import {BackendService} from "../shared/backend.service";
Injectable()
export class UserService {
    register(user: User) {
       /* return new Promise((resolve, reject) => {
            Kinvey.User.logout()
                .then(() => {
                    Kinvey.User.signup({ username: user.email, password: user.password })
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); })
                })
                .catch((error) => { this.handleErrors(error); reject(); })
        });*/
/*   }

   login(user: User) {
      /* return new Promise((resolve, reject) => {
           Kinvey.User.logout()
               .then(() => {
                   Kinvey.User.login(user.email, user.password)
                       .then(resolve)
                       .catch((error) => { this.handleErrors(error); reject(); })
               })
               .catch((error) => { this.handleErrors(error); reject(); })
       });*/
/*   }

   resetPassword(email) {
     /*  return Kinvey.User.resetPassword(email)
           .catch(this.handleErrors);*/
/* }

/*  handleErrors(error: Kinvey.BaseError) {
     /*console.error(error.message);*/
//}
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudGxvZ2luLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50bG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O2FBZWE7QUFDWjs7Ozs7Ozs7Ozs7WUFXWTtBQUdaOzs7O3VDQUl1QztBQUNyQzs7O3NDQUdzQztBQUN6QyxHQUFHO0FBQ0gsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kYWxcIjtcclxuLy9pbXBvcnQge0JhY2tlbmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2JhY2tlbmQuc2VydmljZVwiO1xyXG5JbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgIC8qIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ291dCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTsgcmVqZWN0KCk7IH0pXHJcbiAgICAgICAgfSk7Ki9cclxuIC8qICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgIC8qIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ291dCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgXHJcbiAgICAgXHJcbiAvKiAgIH1cclxuXHJcbiAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XHJcbiAgICAgIC8qICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTsqL1xyXG4gICAvKiB9XHJcblxyXG4gIC8qICBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpIHtcclxuICAgICAgICAvKmNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7Ki9cclxuLy99XHJcbi8vfVxyXG4iXX0=