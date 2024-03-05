import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  // @ts-ignore
  let test:AuthService = inject(AuthService);
  if (test.isUserLoggedIn()) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/accesDenied']);
    return false;
  }
};
